const express = require("express")
const todosController = require("../controllers/todosController")
const router = express.Router();


router.get("/todos", todosController.getTodos);

module.exports = {router}