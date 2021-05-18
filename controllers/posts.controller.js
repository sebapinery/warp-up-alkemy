import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json("GET ALL POSTS");
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
