module.exports = require('../config/imports').express
                    .Router()
                    .get('/', (req, res)=>{
 console.log('call fetch before connection');
 let connection = require('../config/db_connection').getConnection();
    connection.connect();
    console.log('call fetch before connection 1');

    require('../config/queries').fetch(connection, res);
    console.log('call fetch before connection 2');

});