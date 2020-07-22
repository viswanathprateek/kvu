/* eslint-disable linebreak-style */
/* eslint-disable func-names */

/* GET LR Details */
const getLRDetails = function (LRNumber) {
  // Call the method which gets all the LR Numbers
  // method_which_gets_LR_numbers('dbName', 'collectionName', {query})
  return LRNumber;
};

exports.getLRDetails = getLRDetails;

/* *************************** */


/* INSERT LR Details */
function dummy_insertLRDetails(dbName, collectionName, LRDetails) {
  return { ...LRDetails };
}

function getLatestLRNumber() {
  const lrNumberFromDB = 123456;
  return lrNumberFromDB + 1;
}

const insertLRDetails = function (LRDetails) {
  const LRNumber = getLatestLRNumber();
  const updatedLRDetails = dummy_insertLRDetails('dbName', 'collectionName', { LRNumber, ...LRDetails });
  return ({ updatedLRDetails });
};

exports.insertLRDetails = insertLRDetails;

/* *************************** */
