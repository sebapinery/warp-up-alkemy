const Post = require("./models/Post");

export const getAllPosts = async () => await Post.findAll();

export const getSinglePost = async (id) => await Post.findByPk(id);

export const postNewPost = async (bodyPost) => await Post.create(bodyPost);
