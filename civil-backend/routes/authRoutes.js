import express from 'express';
import { loginAdmin, registerAdmin } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/register', registerAdmin); // Use this once via Postman to create your admin account, then comment it out

export default router;