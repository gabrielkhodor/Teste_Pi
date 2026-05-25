const express = require('express');
const tasksRouter = require('./tasks');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: 'Teste Pi API',
    version: 'v1',
    resources: ['/api/v1/tasks'],
  });
});

router.use('/tasks', tasksRouter);

module.exports = router;
