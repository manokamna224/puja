import express from 'express';
import { getTemples } from '../controllers/templeController.js';

const router = express.Router();
router.get('/', getTemples);

export default router;
