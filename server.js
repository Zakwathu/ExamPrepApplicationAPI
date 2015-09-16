
//Use jade as the view template engine.
var express = require('express'),
    jade = require('jade');


var app = express();
app.set('views', './views');
app.set('view engine','jade');
app.engine('jade', jade.__express);

//serve static files

app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static( __dirname + '/images'));

app.listen(process.env.PORT || 80);

app.locals.message = "This page is under construction";

app.get('/', function (req, res) {
  console.log("Rendering content");
  res.render('content');
});
