const posts = require("../data/posts");

// create functions for return posts and post by id

getAllPosts = (req, res) => {
  return res.send(posts);
};

getPostById = (req, res) => {
  const post = posts.filter((item) => item.id == req.params.postId);
  res.send(post);
};

module.exports = {
  getAllPosts,
  getPostById,
};