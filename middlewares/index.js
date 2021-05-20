import { check, body } from "express-validator";

export const postValidations = [
  check("title", "New post must have a title").not().isEmpty(),
  check("content", "New post must have a content").not().isEmpty(),
  body("image", "New post must have a PNG or JPG image URL").not().isEmpty(),
  body("image", "Image must be a valid link").not().isURL(),
  check("CategoryId", "New post must have CategoryId").not().isEmpty(),
];

export const urlImageValidator = ({ body }, res, next) => {
  const url = body.image;
  if (!url) {
    res.status(400).json({ error: "Image field is empty" });
  } else {
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
  }
};
