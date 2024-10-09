import Consumo from '../models/Consumo.js';

// Obtener todos los consumos
export async function getConsumos(_req, res) {
  try {
    const consumos = await Consumo.find();
    res.json(consumos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Obtener un consumo por ID
export async function getConsumoById(req, res) {
  try {
    const consumo = await Consumo.findById(req.params.id);
    if (!consumo) return res.status(404).json({ message: 'Consumo no encontrado' });
    res.json(consumo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Crear un nuevo consumo
export async function createConsumo(req, res) {
  const { area, consumo_kwh, costo } = req.body;
  const nuevoConsumo = new Consumo({ area, consumo_kwh, costo });

  try {
    const consumoGuardado = await nuevoConsumo.save();
    res.status(201).json(consumoGuardado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Actualizar un consumo existente
export async function updateConsumo(req, res) {
  try {
    const consumo = await Consumo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(consumo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Eliminar un consumo
export async function deleteConsumo(req, res) {
  try {
    await Consumo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Consumo eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
