import express from 'express';
import { loginUser, logoutUser, signup } from '../controllers/auth.controller.js';

const router = express.Router(); // Corrected capitalization

router.post("/api/auth/signup", signup);
router.post("/api/auth/login", loginUser);
router.get("/api/auth/logout", logoutUser);

export default router;
