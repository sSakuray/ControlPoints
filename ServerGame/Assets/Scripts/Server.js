const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const PORT        = 7777;
const TICK_RATE   = 30;    // тиков в секунду
const SPEED       = 200;   // юнит/сек (скорость игрока)
const BULLET_SPD  = 450;   // юнит/сек (скорость пули)
const MAX_HP      = 3;
const P_RADIUS    = 22;    // радиус коллайдера игрока
const B_RADIUS    = 8;     // радиус коллайдера пули
const MAP_W       = 960;
const MAP_H       = 540;
const BULLET_LIFE = 3;     // время жизни пули (сек)

let players  = {};         // id → PlayerState
let bullets  = [];         // BulletState[]
let bulletId = 0;

// ─── Утилиты ──────────────────────────────────────────────────────────────
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function dist2(ax, ay, bx, by) { const dx = ax-bx, dy = ay-by; return dx*dx+dy*dy; }
function broadcast(obj) {
    const buf = Buffer.from(JSON.stringify(obj));
    for (const id in players)
        server.send(buf, players[id].port, players[id].address);
}

// ─── Игровой цикл ─────────────────────────────────────────────────────────
const DT = 1 / TICK_RATE;

setInterval(() => {
    // 1. Двигаем игроков
    for (const id in players) {
        const p = players[id];
        if (p.dead) continue;
        p.x = clamp(p.x + p.inputX * SPEED * DT, P_RADIUS, MAP_W - P_RADIUS);
        p.y = clamp(p.y + p.inputY * SPEED * DT, P_RADIUS, MAP_H - P_RADIUS);
    }

    // 2. Двигаем пули + проверяем попадания
    const alive = [];
    for (const b of bullets) {
        b.x += b.vx * DT;  b.y += b.vy * DT;  b.life -= DT;
        if (b.life <= 0 || b.x < 0 || b.x > MAP_W || b.y < 0 || b.y > MAP_H) continue;

        let hit = false;
        for (const id in players) {
            if (id === b.owner || players[id].dead) continue;
            const p = players[id];
            if (dist2(b.x, b.y, p.x, p.y) < (P_RADIUS + B_RADIUS) ** 2) {
                p.hp = Math.max(0, p.hp - 1);
                if (p.hp === 0) p.dead = true;
                broadcast({ type: 'hit', targetId: id, hp: p.hp, dead: p.dead });
                if (p.dead) console.log(`[Server] ${id} выбыл`);
                hit = true;  break;
            }
        }
        if (!hit) alive.push(b);
    }
    bullets = alive;

    // 3. Рассылаем снимок мира всем клиентам
    const playerArr = Object.values(players).map(p =>
        ({ id: p.id, x: p.x, y: p.y, hp: p.hp, dead: p.dead, facing: p.facing }));
    const bulletArr = bullets.map(b =>
        ({ id: b.id, x: b.x, y: b.y, vx: b.vx, vy: b.vy }));
    broadcast({ type: 'state', players: playerArr, bullets: bulletArr, ts: Date.now() });

}, 1000 / TICK_RATE);

// ─── Входящие сообщения ───────────────────────────────────────────────────
server.on('message', (msg, rinfo) => {
    let data;
    try { data = JSON.parse(msg.toString()); } catch { return; }
    const { id, type } = data;
    if (!id) return;

    switch (type) {
        case 'join': {
            if (!players[id]) {
                const spawnX = Object.keys(players).length === 0 ? 160 : 800;
                players[id] = { id, x: spawnX, y: MAP_H/2, inputX:0, inputY:0,
                    facing:1, hp: MAX_HP, dead: false,
                    address: rinfo.address, port: rinfo.port };
                console.log(`[Server] ${id} подключился (${rinfo.address}:${rinfo.port})`);
            } else {
                players[id].address = rinfo.address;
                players[id].port    = rinfo.port;
            }
            broadcast({ type:'assign', id, x: players[id].x, y: players[id].y, hp: MAX_HP });
            break;
        }
        case 'input': {
            const p = players[id];  if (!p || p.dead) return;
            p.inputX = clamp(data.inputX || 0, -1, 1);
            p.inputY = clamp(data.inputY || 0, -1, 1);
            p.facing = data.facing !== undefined ? data.facing : p.facing;
            break;
        }
        case 'shoot': {
            const p = players[id];  if (!p || p.dead) return;
            const a = data.angle || 0;
            bullets.push({ id: bulletId++, owner: id, x: p.x, y: p.y,
                vx: Math.cos(a)*BULLET_SPD, vy: Math.sin(a)*BULLET_SPD, life: BULLET_LIFE });
            break;
        }
        case 'restart': {
            const p = players[id];  if (!p) return;
            p.hp=MAX_HP; p.dead=false; p.inputX=0; p.inputY=0;
            p.x = Object.keys(players).indexOf(id)===0 ? 160 : 800;
            p.y = MAP_H/2;
            broadcast({ type:'respawn', id, x:p.x, y:p.y, hp:MAX_HP });
            console.log(`[Server] ${id} респавнился`);
            break;
        }
        case 'leave': {
            delete players[id];
            broadcast({ type:'leave', id });
            console.log(`[Server] ${id} вышел`);
            break;
        }
    }
});

server.on('error', err => { console.error('[Server]', err); server.close(); });
server.bind(PORT, () =>
    console.log(`[Server] UDP запущен на порту ${PORT} | тикрейт: ${TICK_RATE}/с`));