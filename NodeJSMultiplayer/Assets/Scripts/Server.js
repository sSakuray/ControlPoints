const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const PORT          = 7777;
const TICK_RATE     = 20;
const SPEED         = 5;
const BULLET_SPEED  = 12;
const PLAYER_RADIUS = 0.5;
const BULLET_RADIUS = 0.2;
const SHOOT_COOLDOWN = 400;
const MAX_HP        = 3;
const BULLET_LIFETIME = 3;

let players = {};
let bullets  = [];
let nextBulletId = 0;

setInterval(() => {
    const dt  = 1 / TICK_RATE;
    const now = Date.now();

    for (const id in players) {
        const p = players[id];
        if (p.hp <= 0) continue;
        p.x += p.inputX * SPEED * dt;
        p.y += p.inputY * SPEED * dt;
    }

    for (const id in players) {
        const p = players[id];
        if (!p.wantShoot || p.hp <= 0) continue;
        if (now - p.lastShot < SHOOT_COOLDOWN) continue;
        const len = Math.sqrt(p.shootDirX ** 2 + p.shootDirY ** 2);
        if (len === 0) continue;
        p.lastShot = now;
        bullets.push({
            id: nextBulletId++, ownerId: id,
            x: p.x, y: p.y,
            vx: (p.shootDirX / len) * BULLET_SPEED,
            vy: (p.shootDirY / len) * BULLET_SPEED,
            lifetime: BULLET_LIFETIME
        });
    }

    bullets = bullets.filter(b => {
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        b.lifetime -= dt;
        if (b.lifetime <= 0) return false;
        for (const id in players) {
            if (id === b.ownerId) continue;
            const p = players[id];
            if (p.hp <= 0) continue;
            const dx = p.x - b.x, dy = p.y - b.y;
            if (Math.sqrt(dx*dx + dy*dy) < PLAYER_RADIUS + BULLET_RADIUS) {
                p.hp = Math.max(0, p.hp - 1);
                console.log(`[HIT] ${b.ownerId} → ${id}  HP: ${p.hp}`);
                return false;
            }
        }
        return true;
    });

    const playersArr = Object.entries(players).map(([id, p]) => ({ id, x: p.x, y: p.y, hp: p.hp }));
    const bulletsArr = bullets.map(b => ({ id: b.id, ownerId: b.ownerId, x: b.x, y: b.y }));
    const state = JSON.stringify({ players: playersArr, bullets: bulletsArr });

    for (const id in players) {
        try { server.send(state, players[id].port, players[id].address); } catch {}
    }
}, 1000 / TICK_RATE);

server.on('message', (msg, rinfo) => {
    try {
        const data = JSON.parse(msg.toString());
        const id = data.id;
        if (!id) return;

        if (!players[id]) {
            players[id] = {
                x: 0, y: 0, hp: MAX_HP,
                inputX: 0, inputY: 0,
                shootDirX: 1, shootDirY: 0,
                wantShoot: false, lastShot: 0,
                address: rinfo.address, port: rinfo.port
            };
            console.log(`[JOIN] ${id}`);
        } else {
            players[id].address = rinfo.address;
            players[id].port    = rinfo.port;
        }

        const p = players[id];
        p.inputX    = data.inputX    ?? 0;
        p.inputY    = data.inputY    ?? 0;
        p.shootDirX = data.shootDirX ?? 1;
        p.shootDirY = data.shootDirY ?? 0;
        p.wantShoot = !!data.shoot;

        if (data.restart && p.hp <= 0) {
            p.hp = MAX_HP; p.x = 0; p.y = 0;
            console.log(`[RESTART] ${id}`);
        }
    } catch (e) { console.error('[ERR]', e.message); }
});

server.bind(PORT, () => console.log(`Server on port ${PORT}`));