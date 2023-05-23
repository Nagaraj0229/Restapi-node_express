/* eslint-disable no-undef */
const { v4: uuidv4 } = require('uuid');
let users = [];

const getUsers = (_req, res) => {
  res.send(users);
};

const createUser = (_req, _res) => {
  const user = _req.body;
  users.push({ ...user, id: uuidv4() });
  _res.send(`User with the name ${user.firstname} added to the datbase!`);
};

const getUser = (_req, _res) => {
  const { id } = _req.params;
  const foundUser = users.find(user => user.id === id);
  _res.send(foundUser);
};

const deleteUser = (_req, _res) => {
  const { id } = _req.params;
  users = users.filter(user => user.id !== id);
  _res.send(`User with id ${id} deleted from the database!`);
};

const updateUser = (_req, _res) => {
  const { id } = _req.params;
  const { firstname, lastname, age } = _req.body;
  const user = users.find(user => user.id === id);

  if (firstname) user.firstname = firstname;
  if (lastname) user.lastname = lastname;
  if (age) user.age = age;

  _res.send(`User with id ${id} has been updated`);
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser
};
