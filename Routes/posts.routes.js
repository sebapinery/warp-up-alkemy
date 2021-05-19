import { Router } from "express";
import {
  getPostController,
  postPostController,
} from "../controllers/posts.controller";

const router = Router();

router.get("/", getPostController);
router.get("/:id", getPostController);

router.post("/", postPostController);

router.patch("/", (req, res) => {
  res.json("PATCH A POST");
});

router.delete("/", (req, res) => {
  res.json("DELETE A POST");
});
export default router;
