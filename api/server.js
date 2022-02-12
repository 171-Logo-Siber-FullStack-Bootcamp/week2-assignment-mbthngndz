const express = require("express");

// defined variable from controller files
const postsController = require("./src/controllers/postsControllers");
const usersController = require("./src/controllers/usersControllers");
const todosController = require("./src/controllers/todosController");


// create express app
const app = express();

app.get("/posts", (req, res) => {
    // calling function by controllers 
    var posts = postsController.getAllPosts();

    //return data
    res.send(posts);
})

app.get("/posts/:postId", (req, res) => {
    var posts = postsController.getPostById(req.params.postId);

    res.send(posts);
})

app.get("/users", (req, res) => {
    var users = usersController.getAllUsers();

    res.send(users);
})

app.get("/users/:userId", (req, res) => {
    var user = usersController.getUserById(req.params.userId);

    res.send(user);
})


app.get("/todos", (req, res) => {
    var todos;
    // get todos with user id
    if (req.query.userId) {
        todos = todosController.getTodosByUserId(req.query.userId);
    }
    // get all todos
    else {
        todos = todosController.getAllTodos();
    }

    res.send(todos);
})


// Define port number
const PORT = 5000

// Listening Port
app.listen(PORT);