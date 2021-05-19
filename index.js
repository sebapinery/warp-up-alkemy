import express from "express";
import morgan from "morgan";
import Controller from "./routes/posts.routes.js";
import sequelize from "./db/db.config";
require("./db/asociations");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.use("/api/posts", Controller);

const PORT = process.env.port || 3000;

app.listen(PORT, async () => {
  console.log(`Server on port ${PORT} 🚀`);

  // Connect to database
  await sequelize
    .sync({ force: false })
    .then(() => {
      console.log("DB is connected 🔌");
    })
    .catch((error) => {
      console.log("Hubo un error en la conexion", error);
    });
});
