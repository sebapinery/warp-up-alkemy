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
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Post",
  }
);

module.exports = Post;
