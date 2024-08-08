import express from 'express'
import { getImage } from '../controllers/imageController.js';
import { verifyToken } from '../utlis/verifyUser.js';

const router = express.Router();

router.get('/get-image',verifyToken, getImage);

export default router;
