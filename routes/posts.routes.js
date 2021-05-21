import { Router } from "express";

// CONTROLLERS
import {
  getPostController,
  createPostController,
  editPostController,
  deletePostController,
} from "../controllers/posts.controller";

// MIDDLEWARES
import { postValidations, urlImageValidator } from "../middlewares";

const router = Router();

router.get("/", getPostController);
router.get("/:id", getPostController);
router.post("/", postValidations, urlImageValidator, createPostController);
router.patch("/:id", urlImageValidator, editPostController);
router.delete("/:id", deletePostController);

export default router;
