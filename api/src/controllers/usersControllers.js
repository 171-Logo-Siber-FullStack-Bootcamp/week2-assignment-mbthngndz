const users = require("../data/users.json")

// create functions for return users and user by id

getAllUsers = () => {
    return users
}

getUserById = (userId) => {
    return users.filter(x => x.id == userId)
}

module.exports = {
    getAllUsers,
    getUserById
}