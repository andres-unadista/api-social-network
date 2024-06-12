// connection
import connection from './connection/db.js';
import express from 'express'
import cors from 'cors'

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
