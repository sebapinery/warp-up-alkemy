import { check } from "express-validator";

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

    const validImageExtensions = {
      jpg: next(),
      png: next(),
    };

    return (
      validImageExtensions[extension] ||
      res.status(422).json({ error: "Invalid image formart" })
    );
  }
};
