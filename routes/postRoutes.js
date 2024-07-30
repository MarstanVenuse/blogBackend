import express from 'express'
import { getAllPosts, getHomePosts, createPost, detailPost, deletePost, updatePost, getSlug, deneme } from '../controllers/postControllers.js'
import auth from "../middlewares/authMiddleware.js"
const router = express.Router()

router.get('/', getAllPosts)
router.get('/all', getHomePosts)
router.get('/:slug', detailPost)
router.post('/',auth, createPost)
router.delete('/:id', deletePost)
router.put('/:slug', updatePost)
router.get('/slug/:slug', getSlug);
router.get('/deneme', deneme)


export default router