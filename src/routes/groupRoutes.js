// routes/groupRoutes.js
import express from 'express';
import { createGroup } from '../controllers/groupController.js';

const router = express.Router();

router.post('/create', createGroup);

// more routes to be added  e.g., get, update, delete, etc.

export default router;
