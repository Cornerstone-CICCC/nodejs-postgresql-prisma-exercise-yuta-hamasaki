import { Request, Response } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../models/product.model';

export const getProducts = async (req: Request, res: Response) => {
  const products = await getAllProducts();
  res.json(products);
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProductById(Number(id));
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
};

export const addProduct = async (req: Request, res: Response) => {
  const { productName, price } = req.body;
  const product = await createProduct(productName, Number(price));
  res.status(201).json(product);
};

export const updateProductDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { productName, price } = req.body;
  const product = await updateProduct(Number(id), productName, Number(price));
  res.json(product);
};

export const deleteProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteProduct(Number(id));
  res.json({ message: 'Product deleted successfully' });
};
