// connection
import connection from './connection/db.js';
import express from 'express';
import cors from 'cors';

console.log('API Node UP');

// use db
connection();

// Crear servidor
const app = express();
const port = 3900;

// Cors
app.use(cors());

// Conversión a objetos JS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar rutas
app.get('/test-route', (req, res) => {
  return res.status(200).json(
    {
      id: 1,
      name: 'Andrés Felipe Fernández',
      username: 'andrew'
    }
  );
});

// Configurar el servidor
app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
