const express = require('express');
const { ExpressPeerServer } = require('peer');
const http = require('http');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 9000;

app.use('/myapp', ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs'
}));
console.log(port);
// server.listen(9000);
server.listen(port,'0.0.0.0');







// const express = require('express');
// const { ExpressPeerServer } = require('peer');
// const app = express();
// app.get('/', (req, res, next) => res.send('Hello world!'));
// const server = app.listen(process.env.PORT || 3000);
// const peerServer = ExpressPeerServer(server, {
//   path: '/peerjs'
// });
// app.use('/peerjs', peerServer);
// peerServer.on('connection', (client) => { 
//   console.log('Client connected: ', client.id); 
// });
// peerServer.on('disconnect', (client) => { 
//   console.log('Client disconnected: ', client.id); 
// });






app.get('/', (req, res, next) => res.send('Hello world!'));