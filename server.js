/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http');

var app = express();
var server = app.listen(80);

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
	res.send(200,"Hello Deployment");
});

console.log("Express server listening on port ", 80);