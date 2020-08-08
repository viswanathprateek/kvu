/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
const express = require('express');
const router = express.Router();
const cors = require('cors');
const LRFunctions = require('./lr.functions');

const app = express();
app.use(cors());
app.use(express.json());


router.get('/', async (req, res) => {
  const {data} = req.body; 
  const { offset } = req.body;
  const { limit } = req.body;
  const { type } = req.body;
  new Promise((resolve, reject) => {
    let LRDetails = null;
  try {
    LRFunctions.getLRDetails(data , offset, limit, type, resolve,reject);
  } catch (err) {
    console.error("this shouldn't have happened", err);
  } 
   }).then(data => {
     res.send(data);
   });
});

router.post('/', async (req, res) => {

  new Promise((resolve, reject) => {
    LRFunctions.getNextSequenceValue(req.body,resolve,reject) 
  }).then(data => {
    req.body[0].id=data
    console.log(req.body)
    new Promise((resolve, reject) => {
      LRFunctions.insertLRDetails(req.body,resolve,reject) 
    }).then(data => {
      res.send(data);
    });
  });
  
});

router.patch('/', (req, res) => {
  new Promise((resolve, reject) => {
    let LRDetails = null;
  try {
    LRFunctions.updateLRDetails(req.body.data,req.body.newvalues ,resolve,reject);
  } catch (err) {
    console.error("this shouldn't have happened", err);
  } 
   }).then(data => {
     res.send(data);
   });
});

router.delete('/', (req, res) => {
  new Promise((resolve, reject) => {
    let LRDetails = null;
  try {
    LRFunctions.deleteLRDetails(req.body ,resolve,reject);
  } catch (err) {
    console.error("this shouldn't have happened", err);
  } 
   }).then(data => {
     res.send(data);
   });
});


module.exports = router;
