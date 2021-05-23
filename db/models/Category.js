const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config.js");

class Category extends Model {}
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true,
    },
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Category",
  }
);

module.exports = Category;
