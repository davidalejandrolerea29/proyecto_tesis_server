import express from 'express';
import mongoose from 'mongoose';
import consumoRoutes from './routes/consumoRoutes.js';
import reporteRoutes from './routes/reporteRoutes.js'; // Importa las rutas de reportes
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // Cargar variables de entorno
const app = express();
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
const mongoURI = process.env.MONGODB_URI; // Asegúrate de definir esta variable en tu archivo .env

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB');
    
    // Configurar las rutas después de la conexión
    app.use('/api/consumos', consumoRoutes);
    app.use('/api/reportes', reporteRoutes); // Usa las rutas de reportes

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error de conexión a MongoDB:', err);
  });
