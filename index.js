//DECLARATIONS
var express = require('express')
var cookieParser = require('cookie-parser')
var handlebars = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var jwt = require('express-jwt');

var jsonwebtoken = require('jsonwebtoken');


mongoose.Promise = global.Promise;

//MIDDLEWARE
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/express-template')
var Post = require('./models/post.js')
var User = require('./models/user.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use(jwt({
    secret: 'shhhhhhared-secret',
    getToken: function fromHeaderOrCookie (req) { //fromHeaderOrQuerystring

      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
      } else if (req.cookies && req.cookies.token) {
        return req.cookies.token;
      }
      return null;
    }
}).unless({path: ['/', '/login', '/signup']}));

app.use(function(err, req, res, next) {
  if(err.status == 401) {
      res.redirect('/signup')
  }
});

//VARIABLES
var posts = [
]
app.get('/bananas', function (req, res) {
    res.json({msg: "I love bananas wtf"});
})
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

//SIGN IN
app.get('/login', function (req, res) {
    res.render('layouts/login.handlebars')
});

//SIGN UP
app.get('/signup', function (req, res) {
    res.render('layouts/signup.handlebars')
});

app.post('/signup', function(req,res) {
    var user = new User(req.body);
    user.save(function (err) {
      if (err) console.log(err);
      // saved!
      var token = jsonwebtoken.sign({ _id: user._id }, 'shhhhhhared-secret');
      console.log(req.body)

      console.log(token)
      res.json({ token: token });
    });
})


//PORT ACTIVATION
app.listen(process.env.PORT || 3000, function () {
  console.log('Server is Live!')
})
