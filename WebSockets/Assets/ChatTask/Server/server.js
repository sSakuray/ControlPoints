const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log("Подключение к серверу: ws://localhost:8080");

let clients = [];

wss.on('connection', function connection(ws) {
  console.log("Подключен новый клиент!");
  clients.push(ws);

  ws.on('message', function incoming(message) {
    const textMessage = message.toString();
    console.log('Получено сообщение от клиента:', textMessage);

    // Broadcast to everyone else
    clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(textMessage);
      }
    });
  });

  ws.on('close', () => {
    console.log("Клиент отключился.");
    clients = clients.filter(c => c !== ws);
  });
});
