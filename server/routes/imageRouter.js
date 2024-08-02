import express from 'express'
import { getImage } from '../controllers/imageController.js';

const router = express.Router();

router.get('/get-image', getImage);

export default router;
