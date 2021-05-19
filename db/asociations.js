const Post = require("./models/Post");
const Category = require("./models/Category");

Category.hasOne(Post);
Post.belongsTo(Category);
