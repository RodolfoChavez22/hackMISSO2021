import express from 'express';
import Post from '../models/post.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find({STATE: "TX"}).limit(100);
        res.status(200).send(posts);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
});

export default router;