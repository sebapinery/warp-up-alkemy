import {
  getAllPosts,
  createNewPost,
  getSinglePost,
  editPost,
  deletePost,
  checkCategory,
} from "../db/repository";

export const getPostController = async ({ params }, res) => {
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
};

export const createPostController = async (req, res) => {
  const categoryExist = await checkCategory(req.body.CategoryId);
  if (!categoryExist) {
    res.json({ msg: "Category does not exist" });
  } else {
    const newPost = await createNewPost(req.body);
    return res.json(newPost);
  }
};

export const editPostController = async ({ params, body }, res) => {
  const foundPost = await getSinglePost(params.id);

  if (!foundPost) {
    res.json("Post does not exist");
  } else {
    await editPost(params.id, body);
    const editedPost = await getSinglePost(foundPost.id);
    res.json(editedPost);
  }
};

export const deletePostController = async ({ params }, res) => {
  const foundPost = await getSinglePost(params.id);
  if (!foundPost) {
    res.json("Post does not exist");
  } else {
    await deletePost(params.id);
    res.json({ msg: `Post id: ${params.id} was deleted` });
  }
};
