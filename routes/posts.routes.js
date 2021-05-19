import { Router } from "express";
import {
  getPostController,
  createPostController,
  editPostController,
  deletePostController,
} from "../controllers/posts.controller";

import { postValidations } from "../middlewares/bodyValidator.middleware";

const router = Router();

router.get("/", getPostController);
router.get("/:id", getPostController);

router.post("/", postValidations, createPostController);

router.patch("/:id", editPostController);

router.delete("/:id", deletePostController);
export default router;
