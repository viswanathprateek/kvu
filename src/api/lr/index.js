const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const {lrNumber} = req.query;
    res.send(`GET lr: ${lrNumber}`);
});

router.post('/', (req, res) => {
    const {body} = req;
    console.log({body});
    res.send(`Add new LR`);
});

router.put('/', (req, res) => {
    const {body} = req;
    console.log({body});
    res.send(`Update lr: ${body.lrNumber}`);
});

router.delete('/', (req, res) => {
    const {body} = req;
    console.log({body});
    res.send(`Delete lr: ${body.lrNumber}`);
});


module.exports = router;
