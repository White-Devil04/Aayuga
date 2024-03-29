import { Router } from "express";
import SignupRouter from './signup.js';
import LoginRouter from './login.js';
import UserRoter from './user.js';
import ChatBotRouter from './chatBot.js';
import QuestionRouter from './pose.js';
const router = new Router();

router.use(SignupRouter);
router.use(LoginRouter);
router.use(UserRoter);
router.use(ChatBotRouter);
router.use(QuestionRouter);

export default router;