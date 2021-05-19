const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config.js");

class Post extends Model {}
Post.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Post",
  }
);

module.exports = Post;
