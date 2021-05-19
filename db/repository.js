const Post = require("./models/Post");

export const getAllPosts = async () => await Post.findAll();
