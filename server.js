const cors = require('cors');


const express = require('express');
// const https = require('https');
// const http = require('http');

const app = express();
app.use(cors());



// 実行環境がlocalhostの場合は、httpで実行する
// const server = http.createServer(app);
const port = process.env.PORT || 9000;
// const port = 9000;
const { ExpressPeerServer } = require('peer');
const server = app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
const peerServer = ExpressPeerServer(server, {debug: true});
app.use('/myapp', peerServer);

app.get('/', (req, res, next) => res.send('Hello world! ver0.0.7 port: ' + port.toString() ));


