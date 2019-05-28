module.exports = require('../config/import').express
    .Router()
    .get('/', (req, res) => {
        // create client
        let dbClient = require('../config/import').mongodb.MongoClient;
        // connect database
        dbClient.connect("mongodb://localhost:27017/workshop",
            (err, db) => {
                if (err) {
                    throw err
                }
                else {
                    db.collection("products").find()
                        .toArray((err, array) => {
                            if (err) throw err
                            else res.send(array);
                        });
                }
            });
    })