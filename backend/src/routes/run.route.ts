// src/routes/run.route.ts
import { Router } from 'express';
const handleRun = require('../controllers/run.controller').handleRun;

const router = Router();

router.post('/', handleRun);

export default router;
