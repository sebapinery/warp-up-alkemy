const Post = require("../models/Post");
const Category = require("../models/Category");

export const getAllPosts = () =>
  Post.findAll({
    attributes: ["id", "title", "image", "createdAt"],
    include: { model: Category, attributes: ["name"] },
    order: [["createdAt", "DESC"]],
  });

export const getSinglePost = (id) =>
  Post.findByPk(id, {
    include: {
      model: Category,
      attributes: ["name"],
    },
  });

export const createNewPost = (bodyNewPost) => Post.create(bodyNewPost);

export const editPost = (id, bodyEditedPost) => {
  Post.update(bodyEditedPost, {
    where: {
      id: id,
    },
  });
};

export const deletePost = (id) => {
  Post.destroy({
    where: {
      id: id,
    },
  });
};

export const checkCategory = (id) => {
  Category.findByPk(id);
};
