import { Router } from 'express';
import useMiddleware from '../middlewares/userTokenIdValidator';
import { handleHandler } from '../controllers/handler';

const router = Router();

router.use('/v1/handler', useMiddleware, handleHandler);

export default router;