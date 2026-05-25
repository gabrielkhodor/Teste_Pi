const express = require('express');
<<<<<<< HEAD
=======
const apiRouter = require('./routes');
>>>>>>> f0de99d0f701eaed4da91bd9c7983749857cf61e

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API Express funcionando',
    version: 'v1',
  });
});

<<<<<<< HEAD
app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'ok',
  });
});
=======
app.use('/api/v1', apiRouter);
>>>>>>> f0de99d0f701eaed4da91bd9c7983749857cf61e

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
