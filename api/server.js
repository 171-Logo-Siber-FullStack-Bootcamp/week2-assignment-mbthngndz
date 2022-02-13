const express = require("express");

const postroutes = require("./src/routers/postsRouter");
const userroutes = require("./src/routers/usersRouter");
const todoroutes = require("./src/routers/todosRouter");



// create express app
const app = express();

// using endpoint taken from routes

app.use("", postroutes.router);
app.use("", userroutes.router);
app.use("", todoroutes.router);


// Define port number
const PORT = 5000

// Listening Port
app.listen(PORT);