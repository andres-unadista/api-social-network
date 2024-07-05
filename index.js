// connection
import connection from './connection/db.js';
import express from 'express';
import cors from 'cors';
import userRouter from './routers/user.js';
import followRouter from './routers/follow.js';
import publicationRouter from './routers/publication.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

console.log('API Node UP');

// use db
connection();

// Crear servidor
const app = express();
const port = process.env.PORT || 3900;

// Configurar cors: permite que las peticiones se hagan correctamente
app.use(
  cors({
    origin: '*', // Permitir solicitudes desde cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// Conversión de datos (body a objetos JS)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Configurar rutas

app.use('/api/user', userRouter);
app.use('/api/publication', publicationRouter);
app.use('/api/follow', followRouter);

app.get('/test-route', (req, res) => {
  return res.status(200).json({
    id: 1,
    name: 'Andrés Felipe Fernández',
    username: 'andrew',
  });
});

// Configurar el servidor
app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
