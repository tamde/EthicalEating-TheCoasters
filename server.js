/* Main server file for the app */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars').create({defaultLayout:'main'});

// Create Express app
var server = express();

// Use public directory for CSS, javascript & images
server.use(express.static(path.join(__dirname, '/public')));

// Configure bodyparser
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

// Configure handlebars
server.engine('handlebars', handlebars.engine);
server.set('view engine', 'handlebars');

// Configure port
server.set('port', 3000);

/* Routes */
server.use(require('./routes/home'));
server.use(require('./routes/login_register'));

server.use(function(req,res){
  res.status(404);
  res.render('404');
});

server.use(function(err, req, res, next){
  context = {};
  context.error_code = err.code;
  context.error_stack = err.stack;
  res.status(500);
  res.render('500', context);
});

server.listen(server.get('port'), function(){
  console.log('Express started on port:' + server.get('port') + '; press Ctrl-C to terminate.');
});
