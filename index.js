//DECLARATIONS
var express = require('express')
var handlebars = require('express-handlebars');
var mongoose = require('mongoose');



var app = express()

//MIDDLEWARE
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
//VARIABLES
var posts = [
    { body : "Kevin" },
    { body : "Kadeem" },
    { body :"Kain" },
    { body :"Ken" }
]

// RESPONSE INDEX
app.get('/posts',function(req, res) {
    res.render('layouts/posts');
});


//RESPONSE Delete
//RESPONSE Show
app.get('/posts/:id', function(req, res) {
    var post = posts[req.params.id]
    res.render('layouts/post-show', {post:post})
})
//RESPONSE Delete
//RESPONSE Update
//RESPONSE Edit
//RESPONSE New

 app.get('/', function (req, res) {
   res.render('layouts/home.handlebars', {posts:posts})
 })

//PORT ACTIVATION
app.listen(3000, function () {
  console.log('Server is Live!')
})
