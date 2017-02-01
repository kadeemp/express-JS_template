var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var PostSchema = new Schema({
    body: String
});

var Post = mongoose.model('Post', PostSchema)

module.export = Post;
