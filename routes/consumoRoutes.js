import { getConsumos, getConsumoById, createConsumo, updateConsumo, deleteConsumo } from '../controllers/ConsumoController.js';
import { Router } from 'express';

const router = Router();

router.get('/', getConsumos);
router.get('/:id', getConsumoById);
router.post('/', createConsumo);
router.put('/:id', updateConsumo);
router.delete('/:id', deleteConsumo);

export default router;
