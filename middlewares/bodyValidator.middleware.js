import { body } from "express-validator";

export const postValidations = [
  body("title", "New post must have a title").not().isEmpty(),
  body("content", "New post must have a content").not().isEmpty(),
  body("image", "Image must be a valid link").isURL(),
  body("CategoryId", "New post must have CategoryId").not().isEmpty(),
];

export const urlImageValidator = (req, res, next) => {
  const url = req.body.image;
  const extension = url.split(/[#?]/)[0].split(".").pop().trim();

  if (extension !== "jpg") {
    res
      .status(422)
      .json({ error: "Invalid image URL, please use a valid JPG image URL" });
  } else {
    next();
  }
};
