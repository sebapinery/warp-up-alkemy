import { Sequelize } from "sequelize";
import { database } from "../config";

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    dialect: "mysql",
  }
);

module.exports = sequelize;
