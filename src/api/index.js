const express = require('express');

const emojis = require('./emojis');
const lr = require('./lr');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/lr', lr);

module.exports = router;
