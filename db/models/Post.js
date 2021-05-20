const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Post extends Model {}
Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Title must not be empty" },
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: "Content must not be empty" },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Image must not be empty" },
      },
    },
  },
  {
    sequelize,
    modelName: "Post",
  }
);

module.exports = Post;
