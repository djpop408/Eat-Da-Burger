var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require ('method-override');
var exphbs = require('express-handlebars');
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

var app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: false
}))

app.set('view engine','handlebars');

var routes = require('./controllers/routes.js');
app.use('/', routes);

var port = 3000;
app.listen(port);