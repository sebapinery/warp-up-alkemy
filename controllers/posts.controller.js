import { validationResult } from "express-validator";

import {
  getAllPosts,
  createNewPost,
  getSinglePost,
  editPost,
  deletePost,
  checkCategory,
} from "../db/repository/post.repository";

export const getPostController = async ({ params }, res) => {
  try {
    if (params.id) {
      const foundPost = await getSinglePost(params.id);
      if (!foundPost) {
        res.json({ msg: "Post does not exist" });
      } else {
        return res.json(foundPost);
      }
    } else {
      const allPosts = await getAllPosts();
      return res.json(allPosts);
    }
  } catch (error) {
    res.status(400).json({ msg: "Error getting posts", error });
  }
};

export const createPostController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      const categoryExist = await checkCategory(req.body.CategoryId);
      if (!categoryExist) {
        res.json({ msg: `Category ${req.body.CategoryId} does not exist` });
      } else {
        const newPost = await createNewPost(req.body);
        return res.json(newPost);
      }
    }
  } catch (error) {
    res.json({ msg: "Error creating new Post", error });
  }
};

export const editPostController = async ({ params, body }, res) => {
  try {
    const foundPost = await getSinglePost(params.id);

    if (!foundPost) {
      res.json({ error: `Post ID: ${params.id} does not exist` });
    } else {
      await editPost(params.id, body);
      const editedPost = await getSinglePost(foundPost.id);
      res.json(editedPost);
    }
  } catch (error) {
    res.status(400).json({ msg: "Error on editPostController", error: error });
  }
};

export const deletePostController = async ({ params }, res) => {
  try {
    const foundPost = await getSinglePost(params.id);
    if (!foundPost) {
      res.json({ error: `Post ID: ${params.id} does not exist` });
    } else {
      await deletePost(params.id);
      res.json({ msg: `Post ID: ${params.id} was deleted` });
    }
  } catch (error) {
    res.status(400).json({ msg: "Error on deletePostController", error });
  }
};
