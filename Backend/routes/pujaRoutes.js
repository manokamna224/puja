import express from 'express';
import { getPujas } from '../controllers/pujaControllers.js';

const router = express.Router();
router.get('/', getPujas);

export default router;
