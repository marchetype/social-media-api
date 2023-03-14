const { response } = require('express');
const { Thought, User } = require('../models');
const { populate } = require('../models/User');

module.exports = {
    newThought(req,res) {
        Thought.create(req.body)
        .then((thoughtData) => {
            return User.findOneAndUpdate(
                {_id:req.body.userID},
                {$push:{thoughts:data._id}},
                {new:true}
            )
        })
        .then(userData => res.json(userData))
        .catch((err) => res.status(500).json(err));
    },
    getAllThoughts(req,res) {
        Thought.find()
        .then((thought) => response.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    getThoughtById(req,res) {

    },
    updateThoughtById(req,res) {

    },
    addReaction(req,res) {

    },
    removeReactionById(req,res) {

    }
}