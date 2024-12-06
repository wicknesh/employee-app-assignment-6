import express from 'express';
import { getDocuments, login, signup } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/all', getDocuments);

export default userRouter;