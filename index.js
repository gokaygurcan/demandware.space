// demandware.space

'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const _ = require('lodash');

const app = express();

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('/*', (req, res) => {
  let data = {};

  // timestamp
  _.assign(data, data, {timestamp: Number(new Date())});

  // method
  _.assign(data, data, {method: req.method});

  // headers
  _.assign(data, data, {headers: req.headers});

  // body
  _.assign(data, data, {body: req.body});

  // querystring
  _.assign(data, data, {qs: req.query});

  // auth
  _.assign(data, data, {authorization: req.headers.authorization || {}});

  res.json(data);
});

app.listen(3977, () => {
  console.log('demandware.space is up!');
});
