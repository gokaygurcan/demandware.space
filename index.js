// demandware.space

'use strict';

const bodyParser = require('body-parser');
const redisClient = require('redis').createClient();
const express = require('express');
const limiter = require('express-limiter');

const app = express();

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('/*', limiter(app, redisClient)({
  path: '/*',
  method: 'all',
  lookup: 'connection.remoteAddress',
  total: 100,
  expire: 1000 * 60 * 60,
  onRateLimited: (req, res) => {
    res.status(429).json({
      message: 'Rate limit exceeded!',
      status: 429
    });
  }
}), (req, res) => {
  res.status(200).json({
    timestamp: Number(new Date()),
    method: req.method,
    headers: req.headers,
    body: req.body,
    qs: req.query,
    authorization: (req.headers.authorization || {})
  });
});

app.get('/favicon.ico', (req, res) => {
  res.send(404); // no favicon, hooray!
});

app.listen(3977, () => {
  console.log('demandware.space is up!');
});
