import express from 'express';
import estoque from '../data/estoque.js';

const router = express.Router();

// GET /produtos
router.get('/', (req, res) => {
  res.status(200).json(estoque);
});

export default router;
