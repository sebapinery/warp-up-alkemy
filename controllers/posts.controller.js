import { Router } from "express";
import { getAllPosts } from "../db/repository";

const router = Router();

router.get("/", async (req, res) => {
  const allPosts = await getAllPosts();
  res.json(allPosts);
});

router.post("/", (req, res) => {
  res.json("POST A POST");
});

router.patch("/", (req, res) => {
  res.json("PATCH A POST");
});

router.delete("/", (req, res) => {
  res.json("DELETE A POST");
});
export default router;
