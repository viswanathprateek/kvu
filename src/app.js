const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;





require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');
// 

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test1");
  dbo.collection("tester").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log("vachindi roy")
  console.log(req.connection.remoteAddress);
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
