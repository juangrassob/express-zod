import { Router } from 'express';
import {
  createProduct,
  updateProduct,
} from '../controllers/product.controller';
import { schemaValidation } from '../middlewares/schemaValidation.middleware';
import {
  createProductSchema,
  updateProductSchema,
} from '../schemas/product.schema';

const router = Router();

router.post('/product', schemaValidation(createProductSchema), createProduct);
router.put(
  '/product/:id',
  schemaValidation(updateProductSchema),
  updateProduct
);

export default router;
