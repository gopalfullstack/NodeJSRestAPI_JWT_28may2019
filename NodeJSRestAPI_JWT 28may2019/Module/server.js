var express = require('express');
var app = express();

app.use('/fetch', require('./fetch/fetch'));
app.use('/insert', require('./insert/insert'));
app.use('/update', require('./update/update'));
app.use('/delete', require('./delete/delete'));
app.listen(8080);
console.log('server lesting port 8080');