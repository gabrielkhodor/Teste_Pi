import express, { json, urlencoded } from 'express'; // Importar o framework Express e middlewares para parsear JSON e dados de formulário
import cookieParser from 'cookie-parser'; // Middleware para parsear cookies
import logger from 'morgan'; // Middleware para log de requisições HTTP
import cors from 'cors';

import usersRouter from './routes/users.js';

const app = express(); // Criar a aplicação Express

app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Servir arquivos estáticos da pasta uploads (corrigido: __dirname definido antes do uso)
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default app; // Exportar a aplicação para ser usada em outros arquivos (como o servidor)
