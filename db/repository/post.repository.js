const Post = require("../models/Post");
const Category = require("../models/Category");

export const getAllPosts = async () =>
  await Post.findAll({
    attributes: ["id", "title", "image", "createdAt"],
    include: { model: Category, attributes: ["name"] },
    order: [["createdAt", "DESC"]],
  });

export const getSinglePost = async (id) =>
  await Post.findByPk(id, {
    include: { model: Category, attributes: ["name"] },
  });

export const createNewPost = async (bodyNewPost) =>
  await Post.create(bodyNewPost);

export const editPost = async (id, bodyEditedPost) =>
  await Post.update(bodyEditedPost, { where: { id: id } });

export const deletePost = async (id) =>
  await Post.destroy({ where: { id: id } });

export const checkCategory = async (id) => await Category.findByPk(id);
