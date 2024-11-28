import express from 'express';
import {
  getProducts,
  getProduct,
  addProduct,
  updateProductDetails,
  deleteProductById,
} from '../controller/product.controller';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', addProduct);
router.put('/:id', updateProductDetails);
router.delete('/:id', deleteProductById); 

export default router;
