const express = require('express');
const router = express.Router();
const {addPost,deletePost,editPost,likePost,commentPost} = require('../controllers/PostController');
const { auth } = require('../middleware/auth'); // auth middleware

// Add a new post
router.post('/add', auth,addPost);

// Delete a post
router.delete('/:postId', auth,deletePost);

// Edit post caption
router.put('/:postId', auth,editPost);

// Like or unlike a post
router.put('/:postId/like', auth,likePost);

// Add a comment
router.post('/:postId/comment', auth,commentPost);

module.exports = router;
