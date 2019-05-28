module.exports = require('../config/imports').express
                 .Router()
                 .post('/', (req,res)=>{
    let connection = require('../config/db_connection').getConnection();
    connection.connect();
    require('../config/queries').delete(connection,req,res);                 
                 });