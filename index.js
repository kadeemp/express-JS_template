//DECLARATIONS
var express = require('express')
var handlebars = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express()

mongoose.Promise = global.Promise;

//MIDDLEWARE
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/express-template')
var Post = require('./models/post.js')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true

}));
//VARIABLES
var posts = [
]

//HOME
 app.get('/', function (req, res) {
     Post.find().exec(function (err, posts) {
         res.render('layouts/home.handlebars', {posts:posts});
     })
 })
//INDEX
app.get('/posts',function(req, res) {
    Post.find().exec(function (err, posts) {
        res.render('layouts/posts.handlebars', {posts:posts});
    })
});
//SHOW
app.get('/posts/:id', function(req, res) {
    var post = posts[req.params.id]
    Post.findById(req.params.id).exec(function (err, post) {
        res.render('layouts/post-show', {post:post})
    })
})
//CREATE
app.post('/posts', function(req, res) {
    var post = req.body;
    Post.create(post, function (err, post) {
        res.status(200).json(post);
    })
})
//DELETE
app.delete('/posts/:id', function(req, res) {

    Post.findById(req.params.id).exec(function (err, post) {
        post.remove()
        res.status(200).json({})
    })
})
//UPDATE
//EDIT
app.get('/signin', function (req, res) {

    res.render('layouts/signin.handlebars')

});

//PORT ACTIVATION
app.listen(3000, function () {
  console.log('Server is Live!')
})
