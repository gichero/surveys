//keys.js figure out which credentials to return
if(process.env.NODE.ENV === 'production'){
    //production
    module.exports = require('./prod')
}else{
    //development
    module.exports = require('./dev');
}