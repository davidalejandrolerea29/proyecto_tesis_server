import mongoose from 'mongoose';

const ConsumoSchema = new mongoose.Schema({
  area: { type: String, required: true },
  consumo_kwh: { type: Number, required: true },
  costo: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
  
});

const Consumo = mongoose.model('Consumo', ConsumoSchema);

export default Consumo; // Cambia module.exports a export default
