import express from 'express';
import { getWorks, addWork, deleteWork } from '../controllers/workController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getWorks).post(protect, addWork);
router.route('/:id').delete(protect, deleteWork);

export default router;