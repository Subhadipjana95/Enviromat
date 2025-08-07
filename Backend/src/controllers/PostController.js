const Post = require('../models/PostModel');
const {uploadImageToCloudinary}=require('../utils/imageUploader');

// ADD POST
exports.addPost = async (req, res) => {
  try {
    const { caption} = req.body;

    if (!file) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    const file = req.files.image; // Assuming you're using express-fileupload
    const result = await uploadImageToCloudinary(file,process.env.CLOUDINARY_FOLDER);

    const newPost = new Post({
      userId:req.user.id,
      caption,
      image: result.secure_url
    });

    await newPost.save();
    res.status(201).json({ message: 'Post created', post: newPost });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE POST
exports.deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    if (post.userId.toString() !== userId.toString()) {
      return res.status(403).json({ success: false, message: "Unauthorized: Cannot delete this post" });
    }

    const deleted = await Post.findByIdAndDelete(postId);
    if (!deleted) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// EDIT POST
exports.editPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { caption } = req.body;
    const userId = req.user._id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    if (post.userId.toString() !== userId.toString()) {
      return res.status(403).json({ success: false, message: "Unauthorized: Cannot edit this post" });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { caption },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post updated', post: updatedPost });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LIKE POST
exports.likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req.user.id;

    if (!postId || !userId) {
      return res.status(400).json({ error: 'Post ID and User ID are required' });
    }

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    const index = post.likes.indexOf(userId);
    if (index === -1) {
      post.likes.push(userId);
    } else {
      post.likes.splice(index, 1);
    }

    await post.save();
    res.status(200).json({ message: 'Post like status updated', likes: post.likes.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// COMMENT ON POST
exports.commentPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId, comment } = req.user.id;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    post.comments.push({ userId, comment });
    await post.save();

    res.status(200).json({ message: 'Comment added', comments: post.comments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
