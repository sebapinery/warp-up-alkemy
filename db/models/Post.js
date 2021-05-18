import { Model, DataTypes } from "sequelize";
import sequelize from "../db.config.js";

class Post extends Model {}
Post.init(
  {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    category: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Post",
  }
);

module.exports = Post;
