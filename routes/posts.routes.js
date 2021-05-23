import { Router } from "express";

// CONTROLLERS
import {
  getPostController,
  createPostController,
  editPostController,
  deletePostController,
  getSinglePostController,
} from "../controllers/posts.controller";

// MIDDLEWARES
import {
  postValidations,
  urlImageValidator,
  checkCategoryMiddleware,
} from "../middlewares";

const router = Router();

router.get("/", getPostController);
router.get("/:id", getSinglePostController);
router.post(
  "/",
  postValidations,
  urlImageValidator,
  checkCategoryMiddleware,
  createPostController
);
router.patch(
  "/:id",
  urlImageValidator,
  checkCategoryMiddleware,
  editPostController
);
router.delete("/:id", deletePostController);

export default router;
