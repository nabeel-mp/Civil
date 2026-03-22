import express from 'express';
import { getWorks, addWork, deleteWork } from '../controllers/workController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../config/Cloudinary.js';

const router = express.Router();

// Intercept the POST request with upload.single('image')
router.route('/').get(getWorks).post(protect, upload.single('image'), addWork);
router.route('/:id').delete(protect, deleteWork);

export default router;