import { Router } from 'express';
const router = Router();
import { testPublication } from '../controllers/publication';

router.get('/test-publication', testPublication);

export default router;
