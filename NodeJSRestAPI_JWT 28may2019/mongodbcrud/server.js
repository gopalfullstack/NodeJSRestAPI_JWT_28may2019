let app = require('./config/import').express()
let bodyparser = require('./config/import').bodyparser;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(require('./config/import').cors());
app.use('/fetch', require('./fetch/fetch'));
app.use('/insert', require('./insert/insert'));
app.use('/update', require('./update/update'));
app.use('/delete', require('./delete/delete'));
app.listen('3000');
console.log('server start port 3000');
