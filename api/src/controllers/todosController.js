const todos = require("../data/todos")

// This function was created to be given to the following function which get todos by user id

getTodosByUserId = (userId) => {
    return todos.filter(x => x.userId == userId);
}

// Checking if query params have been sent. if so return todos by user id and if not then return all todos

getTodos = (req,res) => {
    if (req.query.userId) {
        var todo = getTodosByUserId(req.query.userId);
        res.send(todo)
    }
    else{
        res.send(todos)
        console.log("olmadı yar");
    }
    
}


module.exports = {
    getTodos
}