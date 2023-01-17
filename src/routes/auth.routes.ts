import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { schemaValidation } from '../middlewares/schemaValidation.middleware';
import { loginSchema } from '../schemas/auth.schema';
import { productSchema } from '../schemas/product.schema';

const router = Router();

router.post('/login', schemaValidation(loginSchema), login);

export default router;
