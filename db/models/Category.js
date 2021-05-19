const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config.js");

class Category extends Model {}
Category.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Category",
  }
);

module.exports = Category;
