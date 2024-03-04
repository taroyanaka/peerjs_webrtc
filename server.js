const cors = require('cors');


const express = require('express');
const { ExpressPeerServer } = require('peer');
const https = require('https');
const http = require('http');

const app = express();
app.use(cors());


// 実行環境がlocalhostの場合は、httpで実行する、それ以外はhttpsで実行する
const os = require('os');

console.log(os.hostname());

const server = os.hostname() === 'taninakrounoAir' ? http.createServer(app) : https.createServer(app);

// const port = process.env.PORT || 9000;
const port = 3000;
// const port = 9000;

app.use('/myapp', ExpressPeerServer(server, {
  debug: true,
//   path: ''
}));


// server.listen(9000);
// server.listen(port,'0.0.0.0');
server.listen(port);





// console.log(process.env.PORT);

app.get('/', (req, res, next) => res.send('Hello world! ver0.0.6 port: ' + port.toString() ));