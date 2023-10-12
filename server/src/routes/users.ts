import { Router } from 'express';
import { getCounters, increaseCounter } from '../controllers/user';

const router: Router = Router();
router.get('/counters', getCounters);
router.put('/counters/:username', increaseCounter);

export default router;
