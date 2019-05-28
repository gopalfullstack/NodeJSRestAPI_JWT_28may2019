module.exports = require('../config/import').express
    .Router()
    .post('/', (req, res) => {
        let dbClient = require('../config/import').mongodb.MongoClient;
        dbClient.connect("mongodb://localhost:27017/workshop",
            (err, db) => {
                if (err) throw err;
                else {
                    db.collection("products").insertOne({
                        'p_id': req.body.p_id
                    }, (req, result) => {
                        if (err) throw err;
                        else res.send({ insert: 'success', data: result });
                    });
                }

            })
    });