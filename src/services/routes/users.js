/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express');
const router = express.Router();
const { getUsers, createUser, getUser, deleteUser, updateUser } = require('../express/control');

//  get list the users information
router.get('/', getUsers);

// create the user information with uuid
router.post('/', createUser);

// get user information by uuid
router.get('/:id', getUser);

// delete user information by id
router.delete('/:id', deleteUser);

// update user information by id
router.patch('/:id', updateUser);

// export the router
module.exports = router;
