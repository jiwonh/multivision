var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    stylus = require('stylus'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}


// Configurations
app.set('views', __dirname + '/server/views/');

app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}));

app.use(express.static(__dirname + '/public'));
// End Configurations


if (env === "development") {
    mongoose.connect('mongodb://localhost/multivision');
} else {
    mongoose.connect('mongodb://jiwon:home2144@ds119618.mlab.com:19618/mongo2016');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
   console.log('multivision db opened for ' + env + " mode.");
});


var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;

/*
Message.findOne().exec(function(err, messageDoc) {
    mongoMessage = messageDoc.message;
});
*/

Message.findOne(function(err, messages) {
    if (err) return console.error(err);
    mongoMessage = messages.message;
});

app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res) {
   res.render('index', {
       mongoMessage: mongoMessage
   });
});

var port = process.env.PORT || 3030;
app.listen(port, function() {
    console.log('Listening on port ' + port + '...');    
});
