import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getPost = async (req, res) => {
    try {
        const postFound = await Post.findById(req.params.id);

        if (!postFound) return res.status(404).send("Post not found");

        res.json(postFound);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newPost = new Post({ title, description });

        await newPost.save();

        return res.status(201).json(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(updatedPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
        const postRemoved = await Post.findByIdAndDelete(req.params.id);

        if (!postRemoved) return res.status(404).send("Post not found");

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};