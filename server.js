
//Use jade as the view template engine.
var express = require('express'),
    jade = require('jade');


var app = express();
app.set('views', './views');
app.set('view engine','jade');
app.engine('jade', jade.__express);
app.listen(80);

app.locals.message = "This page is under construction";

app.get('/', function (req, res) {
  console.log("Rendering content");
  res.render('content');
});
