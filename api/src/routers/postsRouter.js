const express = require("express")
const postsController = require("../controllers/postsControllers")
const router = express.Router();


router.get("/posts", postsController.getAllPosts);
router.get("/posts/:postId", postsController.getPostById);

module.exports = {router}