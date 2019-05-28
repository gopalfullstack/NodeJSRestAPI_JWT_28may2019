let app = require('./config/imports').express();
let bodyparser = require('./config/imports').bodyparser;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(require('./config/imports').cors());
console.log('call server');
app.use('/fetch', require('./fetch/fetch'));
app.use('/insert', require('./insert/insert'));
app.use('/update', require('./update/update'));
app.use('/delete', require('./delete/delete'));
// app.use('/fetch', (req, res)=>{
//     res.send('fetch success');
// })
app.listen(3000);
console.log('server start with port 3000');

// var app = require("./config/imports").express();
// var bodyparser = require("./config/imports").bodyparser;
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}));
// app.use(require("./config/imports").cors();
// app.use("/fetch",require("./fetch/fetch"));
// // app.use("/insert",require("./insert/insert"));
// // app.use("/update",require("./update/update"));
// // app.use("/delete",require("./delete/delete"));
// app.listen(8080);
// console.log("Server Listening the port no.8080");