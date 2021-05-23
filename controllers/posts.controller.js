import { validationResult } from "express-validator";

import {
  getAllPosts,
  createNewPost,
  getSinglePost,
  editPost,
  deletePost,
} from "../db/repository/post.repository";

export const getPostController = async (_, res) => {
  try {
    const allPosts = await getAllPosts();
    return res.json(allPosts);
  } catch (error) {
    return res.status(500).json({ error: "Error getting posts", error });
  }
};

export const getSinglePostController = async ({ params }, res) => {
  const foundPost = await getSinglePost(params.id);
  if (!foundPost) {
    res.status(404).json({ error: "Post does not exist" });
  } else {
    return res.json(foundPost);
  }
};

export const createPostController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      const newPost = await createNewPost(req.body);
      return res.status(201).json(newPost);
    }
  } catch (error) {
    res.status(500).json({ error: "Error creating new Post", error });
  }
};

export const editPostController = async ({ params, body }, res) => {
  try {
    const foundPost = await getSinglePost(params.id);

    if (!foundPost) {
      res.status(404).json({ error: `Post ID: ${params.id} does not exist` });
    } else {
      await editPost(params.id, body);
      const editedPost = await getSinglePost(params.id);
      res.json(editedPost);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error on editPostController", error: error });
  }
};

export const deletePostController = async ({ params }, res) => {
  try {
    const foundPost = await getSinglePost(params.id);
    if (!foundPost) {
      res.status(404).json({ error: `Post ID: ${params.id} does not exist` });
    } else {
      await deletePost(params.id);
      res.json({ msg: `Post ID: ${params.id} was deleted` });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error on deletePostController", error });
  }
};
