module.exports = require('../config/import').express
                .Router()
                .post('/', (req, res)=>{
                    // get mongodb client
    let dbClient = require('../config/import').mongodb.MongoClient;
        dbClient.connect("mongodb://localhost:27017/workshop", (err,db)=>{
            let obj1 = {'p_id':req.body.p_id};
            let obj2 = {$set:{'p_name':req.body.p_name,
                              'p_cost':req.body.p_cost}};
            db.collection("products").updateOne(obj1,obj2,
                        (err,result)=>{
                if(err)
                    throw err;
                else
                    res.send({update:'success'});
            });
        });
});