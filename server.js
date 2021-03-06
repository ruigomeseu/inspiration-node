var express  = require('express');
var jsonfile = require('jsonfile')
var util     = require('util')
var app      = express();

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/quotes', function(req, res) {
    var file = './quotes.json';
    jsonfile.readFile(file, function(err, obj) {
      res.json(obj);
    });
});

// ROUTES
app.use('/', router);

// START THE SERVER
app.listen(port, ip_address);
console.log('Magic happens on port ' + port);
