const express = require('express');
const { ExpressPeerServer } = require('peer');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use('/myapp', ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs'
}));

server.listen(9000);