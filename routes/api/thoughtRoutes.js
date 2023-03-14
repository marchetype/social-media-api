const router = require('express').Router();

const {
    newThought,
    getAllThoughts,
    getThoughtById,
    updateThoughtById,
    removeThoughtById,
    addReaction,
    removeReactionById
} = require('../../controllers/thoughtController');

//establish GET and POST routes for /api/thoughts
router.route('/').get(getAllThoughts).post(newThought);
//establish GET, PUT, and DELETE routes for /api/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThoughtById).delete(removeThoughtById);
//establish POST and DELETE routes for /api/thoughts/:id/reactions
router.route('/:id/reactions').post(addReaction);
router.route('/:id/reactions/reactionId').delete(removeReactionById);

module.exports = router;