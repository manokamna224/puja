import express from 'express';
import { getPujas } from '../controllers/pujaController.js';

const router = express.Router();
router.get('/', getPujas);

export default router;
