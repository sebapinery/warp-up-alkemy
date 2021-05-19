const Post = require("./models/Post");

export const getAllPosts = async () => await Post.findAll();
export const getSinglePost = async (id) => await Post.findByPk(id);

export const createNewPost = async (bodyNewPost) =>
  await Post.create(bodyNewPost);

export const editPost = async (id, bodyEditedPost) =>
  await Post.update(bodyEditedPost, { where: { id: id } });

export const deletePost = async (id) =>
  await Post.destroy({ where: { id: id } });
