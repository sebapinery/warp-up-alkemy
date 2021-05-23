import { check } from "express-validator";
import { checkCategory } from "../db/repository/post.repository";

export const postValidations = [
  check("title", "New post must have a title").not().isEmpty(),
  check("content", "New post must have a content").not().isEmpty(),
  check("image", "New post must have a PNG or JPG image URL").not().isEmpty(),
  check("image", "Image must be a valid URL").isURL(),
  check("CategoryId", "New post must have CategoryId").not().isEmpty(),
];

export const urlImageValidator = ({ body }, res, next) => {
  const url = body.image;
  if (!url) {
    next();
  } else {
    const extension = url.split(/[#?]/)[0].split(".").pop().trim();

    if (extension === "jpg" || extension === "png") {
      next();
    } else {
      res.status(415).json({
        error: `${extension} is not a valid image extension, please use a JPG or PNG image`,
      });
    }
  }
};

export const checkCategoryMiddleware = async ({ body }, res, next) => {
  const categoryExist = await checkCategory(body.CategoryId);
  if (!categoryExist) {
    res
      .status(422)
      .json({ error: `Category ${req.body.CategoryId} does not exist` });
  } else {
    next();
  }
};
