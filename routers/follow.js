// Importaciones
import { Router } from 'express';
const router = Router();
import { testFollow, saveFollow, unfollow, following, profile, followers } from '../controllers/follow.js';
import { ensureAuth } from '../middlewares/auth.js';

// Definir las rutas
router.post('/', ensureAuth, saveFollow);
router.get('/test-follow', testFollow);
router.post('/unfollow/:id', ensureAuth, unfollow);
router.get('/profile/:id', ensureAuth, profile);
router.get('/following/:id?/:page?', ensureAuth, following);
router.get('/followers/:id?/:page?', ensureAuth, followers);

// Exportar el Router
export default router;
