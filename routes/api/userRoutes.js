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
//establish GET, PUT, and DELETE for /api/users/:id
router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById);
//establish POST and DELETE routes for api/users/:userId/friends/:friendId
router.route('/:id/friends/:friendsId').post(addFriendById).delete(removeFriendById);

module.exports = router;