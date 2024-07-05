import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado correctamente a la BD: db_socialnet');
  } catch (error) {
    console.log(error);
    throw new error('¡No se ha podido conectar a la base de datos!');
  }
};

export default connection;
