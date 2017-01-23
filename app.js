var express = require('express')
var handlebars = require('handlebars');
var app = express()

app.get('/', function (req, res) {
  res.render('index')
})
app.engine

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
