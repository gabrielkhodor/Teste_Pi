const express = require('express');
const apiRouter = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API Express funcionando',
    version: 'v1',
  });
});

app.use('/api/v1', apiRouter);

app.use((req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
  });
});

app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    error: 'Erro interno do servidor',
  });
});

module.exports = app;
