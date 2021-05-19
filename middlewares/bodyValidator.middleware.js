import { check, body, validationResult } from "express-validator";

export const validationPostList = [
  body("title", "New post must have a title").not().isEmpty(),
  body("content", "New post must have a content").not().isEmpty(),
  body("image", "Image must be a valid link").isURL(),
  body("CategoryId", "New post must have CategoryId").not().isEmpty(),
];
