var express = require('express');
var router = express.Router();

router.delete('/', (req, res)=>{
    res.send('Welcome delete module /');
});

module.exports = router;