const sequelize = require("./db/config/db.config");
const Post = require("./db/models/Post");
const Category = require("./db/models/Category");
require("./db/config/asociations");

const posts = [
  {
    title: "titulo 1",
    content: "Lorem Ipsum dolor",
    image: "http://www.imagen.com/image.jpg",
    CategoryId: 1,
  },
  {
    title: "titulo 2",
    content: "Lorem Ipsum dolor",
    image: "http://www.imagen.com/image.jpg",
    CategoryId: 2,
  },
];

const category = [
  {
    name: "Category 1",
  },
  {
    name: "Category 2",
  },
];

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("DB is connected");
  })
  .then(() => {
    category.forEach((category) => {
      Category.create(category);
    });
  })
  .then(() => {
    posts.forEach((post) => {
      Post.create(post);
    });
  })
  .catch((error) => console.log(error));
