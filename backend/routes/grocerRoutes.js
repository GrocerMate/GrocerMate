import express from 'express';
import {
  getGrocers,
  getGrocerById,
  createGrocer,
  addProductToGrocer
} from '../controllers/grocerController.js';

const router = express.Router();

router.get('/', getGrocers);
router.get('/:id', getGrocerById);
router.post('/', createGrocer);
router.post('/:id/products', addProductToGrocer);

export default router;
