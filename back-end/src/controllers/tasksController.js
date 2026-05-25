const tasksService = require('../services/tasksService');

function list(req, res) {
  res.json(tasksService.list());
}

function getById(req, res) {
  const taskId = Number(req.params.id);
  const task = tasksService.getById(taskId);

  if (!task) {
    return res.status(404).json({
      error: 'Tarefa não encontrada',
    });
  }

  return res.json(task);
}

function create(req, res) {
  const result = tasksService.create(req.body);

  if (result.error) {
    return res.status(400).json({
      error: result.error,
    });
  }

  return res.status(201).json(result.task);
}

function update(req, res) {
  const taskId = Number(req.params.id);
  const result = tasksService.update(taskId, req.body);

  if (result.error) {
    return res.status(400).json({
      error: result.error,
    });
  }

  if (!result.task) {
    return res.status(404).json({
      error: 'Tarefa não encontrada',
    });
  }

  return res.json(result.task);
}

function remove(req, res) {
  const taskId = Number(req.params.id);
  const removed = tasksService.remove(taskId);

  if (!removed) {
    return res.status(404).json({
      error: 'Tarefa não encontrada',
    });
  }

  return res.status(204).send();
}

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
};
