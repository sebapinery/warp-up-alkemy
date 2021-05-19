import { getAllPosts, postNewPost, getSinglePost } from "../db/repository";

export const getPostController = async ({ params }, res) => {
  if (params.id) {
    const foundPost = await getSinglePost(params.id);
    return res.json(foundPost);
  } else {
    const allPosts = await getAllPosts();
    return res.json(allPosts);
  }
};

export const postPostController = async (req, res) => {
  const newPost = await postNewPost(req.body);
  return res.json(newPost);
};
