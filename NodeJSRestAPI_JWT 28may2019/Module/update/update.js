var express = require('express');
var router = express.Router();

router.put('/', (req, res)=>{
    res.send('put update module /');
});

module.exports = router;