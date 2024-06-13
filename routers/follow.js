import { Router } from 'express';
const router = Router();
import { testFollow } from '../controllers/follow';

router.get('/test-follow', testFollow);

export default router;
