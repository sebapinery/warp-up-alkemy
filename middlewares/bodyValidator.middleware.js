import { body } from "express-validator";

export const postValidations = [
  body("title", "New post must have a title").not().isEmpty(),
  body("content", "New post must have a content").not().isEmpty(),
  body("image", "Image must be a valid link").isURL(),
  body("CategoryId", "New post must have CategoryId").not().isEmpty(),
];

export const urlImageValidator = ({ body }, res, next) => {
  const url = body.image;
  const extension = url.split(/[#?]/)[0].split(".").pop().trim();

  if (extension === "jpg") {
    next();
  } else if (extension === "png") {
    next();
  } else {
    res.status(422).json({
      error: `${extension} is not a valid image extension, please use a JPG or PNG image`,
    });
  }
};
