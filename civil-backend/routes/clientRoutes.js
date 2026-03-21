import express from 'express';
import { getClients, addClient, deleteClient } from '../controllers/clientController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getClients).post(protect, addClient);
router.route('/:id').delete(protect, deleteClient);

export default router;