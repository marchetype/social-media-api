const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    newUser,
    updateUserById,
    deleteUserById,
    addFriendById,
    removeFriendById
} = require('../../controllers/userController');

//establish GET and POST routes for /api/users
router.route('/').get(getAllUsers).post(newUser);

