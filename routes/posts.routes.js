import { Router } from "express";
import {
  getPostController,
  createPostController,
  editPostController,
  deletePostController,
} from "../controllers/posts.controller";

import {
  postValidations,
  urlImageValidator,
} from "../middlewares/bodyValidator.middleware";

const router = Router();

router.get("/", getPostController);
router.get("/:id", getPostController);

router.post("/", postValidations, urlImageValidator, createPostController);

router.patch("/:id", editPostController);

router.delete("/:id", deletePostController);
export default router;
