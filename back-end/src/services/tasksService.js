const taskStore = require('../data/taskStore');

function list() {
  return taskStore.list();
}

function getById(taskId) {
  if (!Number.isInteger(taskId)) {
    return null;
  }

  return taskStore.getById(taskId);
}

function create(payload) {
  const validation = normalizePayload(payload);

  if (validation.error) {
    return validation;
  }

  const task = taskStore.create(validation.value);

  return { task };
}

function update(taskId, payload) {
  if (!Number.isInteger(taskId)) {
    return { error: 'ID inválido' };
  }

  const validation = normalizePayload(payload, true);

  if (validation.error) {
    return validation;
  }

  const task = taskStore.update(taskId, validation.value);

  return { task };
}

function remove(taskId) {
  if (!Number.isInteger(taskId)) {
    return false;
  }

  return taskStore.remove(taskId);
}

function normalizePayload(payload, partial = false) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { error: 'Corpo da requisição inválido' };
  }

  const normalized = {};

  if (payload.title !== undefined) {
    if (
      typeof payload.title !== 'string' ||
      payload.title.trim().length === 0
    ) {
      return { error: 'title deve ser uma string não vazia' };
    }

    normalized.title = payload.title.trim();
  } else if (!partial) {
    return { error: 'title é obrigatório' };
  }

  if (payload.description !== undefined) {
    if (typeof payload.description !== 'string') {
      return { error: 'description deve ser uma string' };
    }

    normalized.description = payload.description.trim();
  } else if (!partial) {
    normalized.description = '';
  }

  if (payload.done !== undefined) {
    if (typeof payload.done !== 'boolean') {
      return { error: 'done deve ser booleano' };
    }

    normalized.done = payload.done;
  } else if (!partial) {
    normalized.done = false;
  }

  return { value: normalized };
}

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
};
