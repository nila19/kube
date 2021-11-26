'use strict';

const express = require('express');
const os = require('os');

const hostname = os.hostname() //'127.0.0.1';
const HOST = '0.0.0.0';
const PORT = 8080;
const VERSION = '2.0'

// app
const app = express();
app.get('/', (req, res) => {
  res.send(`<p>Hello World - ${VERSION}</p> <p>${Date()}</p> <p>From http://${hostname}:${PORT}</p>`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${hostname}:${PORT}`);

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<p>Hello World!!!</p>')
//   res.write(Date())
//   res.end(`<p>Hello World from http://${hostname}:${PORT}/</p>`);
// });

// server.listen(PORT, HOST, () => {
//   console.log(`Server running at http://${hostname}:${PORT}/`);
// });
