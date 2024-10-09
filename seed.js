import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Reporte from '../back_consumo_ia/models/reporteModel.js'; // Asegúrate de que la ruta esté correcta

dotenv.config(); // Cargar variables de entorno

// Conectar a MongoDB
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB');
    seedData();
  })
  .catch((err) => {
    console.error('Error de conexión a MongoDB:', err);
  });

async function seedData() {
  const reportes = [
    {
      periodo: '01/2023',
      consumoKwPunta: 219.30,
      consumoKwResto: 438.00,
      consumoKwValle: 340.20,
      energiaReactiva: 30.30,
      cargoFijo: 92.69428,
      importeConsumoPunta: 2396.88,
      importeConsumoRestoValle: 8331.54,
      iva: 21718.77,
      totalPagar: 125141.47
    },
    {
      periodo: '02/2023',
      consumoKwPunta: 382.50,
      consumoKwResto: 2475.00,
      consumoKwValle: 336.00,
      energiaReactiva: 571.80,
      cargoFijo: 92694.28,
      importeConsumoPunta: 5331.48,
      importeConsumoRestoValle: 38878.10,
      iva: 28479.81,
      totalPagar: 165553.67
    },
    {
      periodo: '03/2023',
      consumoKwPunta: 782.70,
      consumoKwResto: 10646.40,
      consumoKwValle: 457.20,
      energiaReactiva: 2741.40,
      cargoFijo: 92694.28,
      importeConsumoPunta: 10099.66,
      importeConsumoRestoValle: 153654.47,
      iva: 54024.22,
      totalPagar: 311282.43
    },
    {
      periodo: '04/2023',
      consumoKwPunta: 634.20,
      consumoKwResto: 4881.60,
      consumoKwValle: 423.90,
      energiaReactiva: 1256.70,
      cargoFijo: 92694.28,
      importeConsumoPunta: 9005.07,
      importeConsumoRestoValle: 74781.54,
      iva: 37060.99,
      totalPagar: 213541.88
    },
    {
      periodo: '05/2023',
      consumoKwPunta: 544.80,
      consumoKwResto: 2507.10,
      consumoKwValle: 381.90,
      energiaReactiva: 414.60,
      cargoFijo: 92694.28,
      importeConsumoPunta: 7735.67,
      importeConsumoRestoValle: 40706.17,
      iva: 39638.59,
      totalPagar: 170774.71
    },
    {
      periodo: '06/2023',
      consumoKwPunta: 535.80,
      consumoKwResto: 2733.00,
      consumoKwValle: 389.40,
      energiaReactiva: 558.30,
      cargoFijo: 92694.28,
      importeConsumoPunta: 10185.99,
      importeConsumoRestoValle: 59116.03,
      iva: 34019.22,
      totalPagar: 196015.52
    },
    // Agrega más reportes según la imagen proporcionada...
  ];

  try {
    await Reporte.insertMany(reportes);
    console.log('Datos insertados exitosamente');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error al insertar datos:', err);
  }
}

