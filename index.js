var express = require('express')
var handlebars = require('express-handlebars');

var app = express()


app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/api/blahs',function(req, res) {
    res.json
} )
// app.get('/', function (req, res) {
//   res.render('layouts/home.handlebars')
// })


app.listen(3000, function () {
  console.log('Server is Live!')
})
