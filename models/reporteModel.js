// models/reporteModel.js
import mongoose from 'mongoose';

const reporteSchema = mongoose.Schema({
  periodo: { type: String, required: true },
  consumoKwPunta: { type: Number, required: true },
  consumoKwResto: { type: Number, required: true },
  consumoKwValle: { type: Number, required: true },
  energiaReactiva: { type: Number, required: true },
  cargoFijo: { type: Number, required: true },
  importeConsumoPunta: { type: Number, required: true },
  importeConsumoRestoValle: { type: Number, required: true },
  iva: { type: Number, required: true },
  totalPagar: { type: Number, required: true }
});

const Reporte = mongoose.model('Reporte', reporteSchema);
export default Reporte;
