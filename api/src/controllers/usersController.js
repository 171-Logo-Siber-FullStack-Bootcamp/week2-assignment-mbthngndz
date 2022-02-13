const users = require("../data/users");

// create functions for return posts and post by id

getAllUsers = (req, res) => {
  return res.send(users);
};

getUserById = (req, res) => {
  const user = users.filter((item) => item.id == req.params.userId);
  res.send(user);
};

module.exports = {
  getAllUsers,
  getUserById,
};