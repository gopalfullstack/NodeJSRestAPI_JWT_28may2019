module.exports = require('../config/imports').express
                .Router()
                .post('/', (req, res)=>{
    let dbClient = require('../config/imports').mongodb;
        dbClient.connect("mongodb://localhost:27017/workshop", 
        (err, db)=>{
            if(err) throw err;
            else {
                db.collection("user").find({
                    "u_name": req.body.u_name
                }).toArray((err, result) => {
                   if (err) throw err;
                    else{
                        if(result.length>0){
                            let token = require("../config/generateToken")
                                  ({'u_name':req.body.u_name,
                                  'u_password':req.body.u_password},'hr@nareshit.in');
                                  require("../config/token").token = token;
                                  res.send({'token':token,login:'success'});
                        }
                   } 
                });
            }
});
});