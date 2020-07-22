/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
const express = require('express');
const router = express.Router();
const LRFunctions = require('./lr.functions');

router.get('/', async (req, res) => {
  const { lrNumber } = req.query;
  let LRDetails = null;
  try {
    LRDetails = await LRFunctions.getLRDetails(lrNumber);
  } catch (err) {
    console.error("this shouldn't have happened", err);
  }
  res.send({ LRDetails });
});

router.post('/', async (req, res) => {
  const { LRDetails } = req.body;
  let updatedLRList = null;
  try {
    updatedLRList = await LRFunctions.insertLRDetails(LRDetails);
  } catch (err) {
    console.error("this shouldn't have happened", err);
  }
  res.send(updatedLRList);
});

router.put('/', (req, res) => {
  const { body } = req;
  console.log({ body });
  res.send(`Update lr: ${body.lrNumber}`);
});

router.delete('/', (req, res) => {
  const { body } = req;
  console.log({ body });
  res.send(`Delete lr: ${body.lrNumber}`);
});


module.exports = router;
