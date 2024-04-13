import express from 'express'
import { signup, test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test)

router.post('/signup',signup)

export default router;


