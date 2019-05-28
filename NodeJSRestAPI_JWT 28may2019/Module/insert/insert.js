// import the epress module
var express = require('express');
// import the router module for Rest API
var router = express.Router();

router.post('/', (req, res) => {
    res.send('Welcome the post Module');
});

module.exports = router;
