// routes/reporteRoutes.js
import express from 'express';
import Reporte from '../models/reporteModel.js';

const router = express.Router();

// Obtener todos los reportes
router.get('/', async (req, res) => {
  try {
    const reportes = await Reporte.find();
    res.json(reportes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener reportes' });
  }
});

// Crear un nuevo reporte
router.post('/', async (req, res) => {
  const nuevoReporte = new Reporte(req.body);
  try {
    const reporteGuardado = await nuevoReporte.save();
    res.status(201).json(reporteGuardado);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear reporte' });
  }
});

export default router;
