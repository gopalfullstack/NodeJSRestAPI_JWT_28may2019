module.exports = require('../config/import').express
                .Router()
                .post('/', (req, res)=>{
                    // get mongodb client
    let dbClient = require('../config/import').mongodb.MongoClient;
        dbClient.connect("mongodb://localhost:27017/workshop", (err,db)=>{
            let obj1 = {'p_id':req.body.p_id};
            db.collection("products").deleteOne(obj1,
                        (err,result)=>{
                if(err)
                    throw err;
                else
                    res.send({delete:'success'});
            });
        });
});