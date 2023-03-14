const { response } = require('express');
const { Thought, User } = require('../models');
const { populate } = require('../models/User');

module.exports = {
    newThought(req,res) {
        Thought.create(req.body)
        .then((thoughtData) => {
            return User.findOneAndUpdate(
                { _id: req.body.userID },
                { $push: {thoughts:data._id} },
                { new:true }
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
    getThoughtById({ params },res) {
        Thought.findOne({ _id: params.id })
        .then((thoughtData) => {
            if(!thoughtData) {
                res.status(404).json({ message: 'Thought not found; invalid ID'});
                return;
            }
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    updateThoughtById(req,res) {
        
    },
    addReaction(req,res) {

    },
    removeReactionById(req,res) {

    }
}