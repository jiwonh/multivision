var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/multivision',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://jiwon:home2144@ds119618.mlab.com:19618/mongo2016',
        port: process.env.PORT || 80
    }
}