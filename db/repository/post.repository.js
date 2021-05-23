const Post = require("../models/Post");
const Category = require("../models/Category");

export const getAllPosts = () => {
  return Post.findAll({
    attributes: ["id", "title", "image", "createdAt"],
    include: { model: Category, attributes: ["name"] },
    order: [["createdAt", "DESC"]],
  });
};

export const getSinglePost = (id) => {
  return Post.findByPk(id, {
    include: {
      model: Category,
      attributes: ["name"],
    },
  });
};

export const createNewPost = (bodyNewPost) => {
  return Post.create(bodyNewPost);
};

export const editPost = (id, bodyEditedPost) => {
  return Post.update(bodyEditedPost, {
    where: {
      id: id,
    },
  });
};

export const deletePost = (id) => {
  return Post.destroy({
    where: {
      id: id,
    },
  });
};

export const checkCategory = (id) => {
  return Category.findByPk(id);
};
