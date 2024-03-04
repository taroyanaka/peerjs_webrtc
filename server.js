const cors = require('cors');


const express = require('express');
const { ExpressPeerServer } = require('peer');
const http = require('http');

const app = express();
app.use(cors());

const server = http.createServer(app);
// const port = process.env.PORT || 9000;
const port = 3000;
// const port = 9000;

app.use('/myapp', ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs'
}));


// server.listen(9000);
// server.listen(port,'0.0.0.0');
server.listen(port);





// console.log(process.env.PORT);

app.get('/', (req, res, next) => res.send('Hello world! port: ' + port.toString() ));