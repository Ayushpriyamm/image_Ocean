import express from 'express'
import { signin, signup, test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);

router.post('/signup', signup);
router.post('/signin', signin);

export default router;


