import { Router } from 'express';
const router = Router();
import { testUser } from '../controllers/user';

router.get('/test-user', testUser);

export default router;