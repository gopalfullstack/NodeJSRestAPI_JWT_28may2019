module.exports = (req, res, next)=> {
    console.log('call auth');
    console.log('call auth 1', req.header("token"));
    console.log('call auth 2', require('./token'));
    console.log('call auth 3', require('./token').token);
    if(req.header("token") == require('./token').token) {
    console.log(' inside if call auth')
        next();
    } else {
        res.send('UnAthrized 1-- User...! please login again  ');
    }
};