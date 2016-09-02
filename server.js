 
// BASE SETUP
// =============================================================================
var mongoose   = require('mongoose');
//https://mlab.com
mongoose.connect('mongodb://user1:secret@ds161485.mlab.com:61485/sentiment_analysis'); // connect to our database
// call the packages we need
var express    = require('express');        // call express
var router     = express.Router();
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');            

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json()); 
app.use(bodyParser.json()); 
// parse application/x-www-form-urlencoded


// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/UI')); 


var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {
    console.log('Inbound request.');
    next();
});

// REGISTER OUR ROUTES -------------------------------

require('./Server/routes/comment')(router);
app.use('/api', router); 

router.get('/', function(req, res) 
{
    res.json({ message: 'Routes are working' });   
});

app.listen(port);
console.log('Listening on ' + port);
