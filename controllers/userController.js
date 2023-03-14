const { User, Thought } = require('../models');

module.exports = {
    newUser(req,res) {
        User.create(req.body)
        .then((userData) => res.json(userData))
        .catch((err) => res.status(500).json(err));
    },
    getAllUsers(req,res) {
        User.find()
        .then((users) => response.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getUserById(req,res) {
        User.findOne({ _id: params.id })
        .then((userData) => 
            !user
            ? res.status(404).json({message: 'User not found; invalid ID'})
            : res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateUserById(req,res) {
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {
                runValidators: true,
                new: true
            })
            .then((user) => {
                !user 
                ? res.status(404).json({message: 'No user found; ID invalid'}) 
                : res.json(user);
            })
            .catch((err) => res.status(500).json(err));
    },
    removeUserById(req,res) {
        User.findOneAndDelete({_id: req.params.id})
        .then((user) =>
            !user
            ? res.status(404).json({message: 'User not found; Invalid ID'})
            : Thought.deleteMany({
                _id: {
                    $in: user.thoughts
                }
            })).then(() => res.json({message: 'User deleted'}))
            .catch((err) => res.status(500).json(err));
        },
    addFriend(req,res) {
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$addToSet: {friends: req.params.friendsId}},
            {runValidators: true, new: true}
        )
        .then((user) => 
        !user 
        ? res
            .status(404)
            .json({message: 'Friend not found; invalid ID'})
        : res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    removeFriendById(req,res) {
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$pull: {friends: req.params.friendsId}},
            {runValidators: true, new: true}
        )
        .then((user) => 
            !user
            ? res
                .status(404)
                .json({message: 'User not found; invalid ID'})
                : res.json(thought)
                )
                .catch((err) => res.status(500).json(err));
    }
}