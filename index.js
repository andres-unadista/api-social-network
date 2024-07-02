// connection
import connection from './connection/db.js';
import express from 'express';
import cors from 'cors';
import userRouter  from './routers/user.js';
import followRouter  from './routers/follow.js';
import publicationRouter  from './routers/publication.js';

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

app.use('/api/user', userRouter);
app.use('/api/publication', publicationRouter);
app.use('/api/follow', followRouter);

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
