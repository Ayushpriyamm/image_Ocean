import express from 'express'
import { logout, signin, signup, test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);

export default router;


