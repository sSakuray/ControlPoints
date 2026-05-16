const express = require('express'), admin = require('firebase-admin'), cors = require('cors'), fetch = require('node-fetch');
const key = require('./firebase-key.json');

admin.initializeApp({ credential: admin.credential.cert(key) });
const db = admin.firestore(), app = express();
app.use(cors(), express.json());

const apiKey = 'AIzaSyDHBZ1m4UI1M_DPmWAphNCKy_OCLX_ZdIU';

app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const u = await admin.auth().createUser({ email, password });
        await db.collection('users').doc(u.uid).set({ email, score: 0 });
        res.json({ uid: u.uid });
    } catch (e) { res.status(400).json({ error: e.message }); }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const r = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
            method: 'POST', body: JSON.stringify({ email, password, returnSecureToken: true }), headers: {'Content-Type': 'application/json'}
        });
        const d = await r.json();
        if (d.error) throw new Error(d.error.message);
        res.json({ uid: d.localId });
    } catch (e) { res.status(401).json({ error: e.message }); }
});

app.post('/save', async (req, res) => {
    try {
        await db.collection('users').doc(req.body.uid).set({ score: req.body.score }, { merge: true });
        res.json({ success: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/getscore', async (req, res) => {
    try {
        const d = await db.collection('users').doc(req.query.uid).get();
        res.json({ score: d.exists ? d.data().score : 0 });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.listen(3000, () => console.log('OK'));
