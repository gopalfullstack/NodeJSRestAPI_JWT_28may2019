// import the express module
var express = require('express');
// create the instance of the router
var router = express.Router();

router.get('/', (req, res)=>{
    res.send('welcome the get / module');
});

module.exports = router;