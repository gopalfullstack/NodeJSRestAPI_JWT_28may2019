module.exports = (obj,password) => {
    return require('./imports').jwt.encode(obj,password);
};