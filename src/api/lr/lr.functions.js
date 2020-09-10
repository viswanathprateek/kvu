/* eslint-disable linebreak-style */
/* eslint-disable func-names */
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


/* GET LR Details */
const getLRDetails = function (data, offset, limits, type, resolve, reject) {
  const resultType = {
    _id: -1
  };
  if (type == "ascending") {
    resultType = {
      _id: 1
    };
  }
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("ML");
    dbo.collection("LR").find(data).sort(resultType).skip(offset).limit(limits).toArray(function (err, result) {
      if (err) throw err;
      db.close();
      resolve(result);
    });
  });

};

exports.getLRDetails = getLRDetails;

/* *************************** */


const insertLRDetails = function (data, resolve, reject) {

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("ML");
    dbo.collection("LR").insertMany(data, function (err, result) {
      if (err) throw err;
      db.close();
      resolve(result);
    });
  });
};

exports.insertLRDetails = insertLRDetails;

/* *************************** */

const getNextSequenceValue = (data, resolve, reject) => {

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("ML");
    dbo.collection("LR").find({}).sort({
      _id: -1
    }).limit(1).toArray(function (err, result) {
      if (err) throw err;
      db.close();
      console.log(result)
      if (result.length == 0) {
        resolve(result.push({
          "id": 1
        }));
      } else {
        resolve(result[0].id + 1);
      }
    });
  });
}
exports.getNextSequenceValue = getNextSequenceValue;

/* *************************** */


const deleteLRDetails = (data, resolve, reject) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("ML");
    dbo.collection("LR").deleteMany(data, function (err, result) {
      if (err) throw err;
      db.close();
      resolve(result);
    });
  });
}

exports.deleteLRDetails = deleteLRDetails;

/* *************************** */


const updateLRDetails = (data, newvalues, resolve, reject) => {
  newvalues = {
    $set: newvalues
  }
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("ML");
    dbo.collection("LR").updateMany(data, newvalues, function (err, result) {
      if (err) throw err;
      db.close();
      resolve(result);
    });
  });
}

exports.updateLRDetails = updateLRDetails;