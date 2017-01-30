//DECLARATIONS
var express = require('express')
var handlebars = require('express-handlebars');

var app = express()

//MIDDLEWARE
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
//VARIABLES
var names = [
    {name:"Kevin"},
    {name:"Kadeem"},
    {name:"Kain"},
    {name:"Ken"}
]

// RESPONSE INDEX
app.get('/api/blahs',function(req, res) {
    res.json({names:names});
});


 app.get('/', function (req, res) {
   res.render('layouts/home.handlebars')
 })

//PORT ACTIVATION
app.listen(3000, function () {
  console.log('Server is Live!')
})
