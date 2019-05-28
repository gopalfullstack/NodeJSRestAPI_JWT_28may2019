module.exports = require('../config/imports').express
                .Router()
                .get('/',[require("../config/auth")],
                 (req, res)=>{
    let dbClient = require('../config/imports').mongodb.MongoClient;
    dbClient.connect("mongodb://localhost:27017/workshop", 
        (err, db)=>{
            if(err) throw err;
            else {

                db.collection("user").find().toArray((err, result) => {
                    if(err) throw err;
                    else{
                        res.send({result:result});
                    }
                });
            }
        });
            });