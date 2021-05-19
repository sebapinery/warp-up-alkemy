const sequelize = require("./db/db.config.js");
const Post = require("./db/models/Post");

const posts = [
  {
    title: "titulo 1",
    content: "Lorem Ipsum dolor",
    image: "http://www.imagen.com/image.jpg",
    category: "Categoria 1",
  },
];

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("DB is connected");
  })
  .then(() => {
    posts.forEach((post) => {
      Post.create(post);
    });
  });
