var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require ('method-override');
var exphbs = require('express-handlebars');
var timeout = require('connect-timeout');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

var app = express();
app.use('/static', express.static('public'));
app.use(timeout(15000));

//Sets up morgan for logging
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// setup the logger (writes to the file)
app.use(morgan('combined', { stream: accessLogStream }));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.set('view engine','handlebars');

var routes = require('./controllers/routes.js');
app.use('/', routes);

var port = 3000;
app.listen(port);