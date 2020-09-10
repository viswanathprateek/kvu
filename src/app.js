const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api/lr');


var url = "mongodb://localhost:27017/";
var data =[]
//to find multiple
//dbo.collection("tester").find({"id" : {"$in" : [1,2,3,5,4,6,7,8,9]}}).toArray(function(err, result) {


const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log("vachindi roy")
  console.log(req.connection.remoteAddress);
  res.send("Sucess Working")
});

var getData= (database, collections,parameters,resolve,reject) =>{
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(database);
    dbo.collection(collections).find(JSON.parse(parameters)).toArray(function(err, result) {
      if (err) throw err;
      db.close();
      resolve(result);
      return result
    });
  });
}
var postData= (database, collections,parameters,resolve,reject) =>{
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(database);
    dbo.collection(collections).insertMany(parameters, function(err, result) {
      if (err) throw err;
      db.close();
      resolve(result);
      return result
    });
  });
}
var deleteData= (database, collections,parameters,resolve,reject) =>{
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(database);
    dbo.collection(collections).deleteMany(parameters, function(err, result) {
      if (err) throw err;
      db.close();
      resolve(result);
      return result
    });
  });
}

app.delete('/delete', (req, res) => {
  new Promise((resolve, reject) => {
    deleteData(req.body.database,req.body.collections,req.body.parameters,resolve,reject) 
  }).then(data => {
    res.send(data);
  });
});

var updateData= (database, collections,parameters,newvalues,resolve,reject) =>{
  newvalues={$set: newvalues }
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(database);
    dbo.collection(collections).updateMany(parameters, newvalues, function(err, result){
      if (err) throw err;
      db.close();
      resolve(result);
      return result
    });
  });
}

app.patch('/patch', (req, res) => {
  console.log(req.body)
  new Promise((resolve, reject) => {
    updateData(req.body.database,req.body.collections,req.body.parameters,req.body.newvalues,resolve,reject) 
  }).then(data => {
    res.send(data);
  });
});
app.post('/post', (req, res) => {
  console.log(req.body)
  new Promise((resolve, reject) => {
    postData(req.body.database,req.body.collections,req.body.parameters,resolve,reject) 
  }).then(data => {
    res.send(data);
  });
});

app.get('/get/:database/:collections/:parameters', (req, res) => {
  new Promise((resolve, reject) => {
   getData(req.params.database,req.params.collections,req.params.parameters,resolve,reject) 
  }).then(data => {
    res.send(data);
  });
});

app.use('/api/lr', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
