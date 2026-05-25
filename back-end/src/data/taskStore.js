const tasks = [
  {
    id: 1,
    title: 'Estruturar API inicial',
    description: 'Base do backend com Express e rotas versionadas',
    done: true,
    createdAt: '2026-05-25T00:00:00.000Z',
    updatedAt: '2026-05-25T00:00:00.000Z',
  },
  {
    id: 2,
    title: 'Criar CRUD de tarefas',
    description:
      'Implementar operações em memória para evoluir o projeto por etapas',
    done: false,
    createdAt: '2026-05-25T00:00:00.000Z',
    updatedAt: '2026-05-25T00:00:00.000Z',
  },
];

let nextId = 3;

function list() {
  return tasks.map(copyTask);
}

function getById(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  return task ? copyTask(task) : null;
}

function create(data) {
  const timestamp = new Date().toISOString();
  const task = {
    id: nextId,
    title: data.title,
    description: data.description || '',
    done: Boolean(data.done),
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  nextId += 1;
  tasks.push(task);

  return copyTask(task);
}

function update(taskId, data) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return null;
  }

  if (data.title !== undefined) {
    task.title = data.title;
  }

  if (data.description !== undefined) {
    task.description = data.description;
  }

  if (data.done !== undefined) {
    task.done = data.done;
  }

  task.updatedAt = new Date().toISOString();

  return copyTask(task);
}

function remove(taskId) {
  const index = tasks.findIndex((item) => item.id === taskId);

  if (index === -1) {
    return false;
  }

  tasks.splice(index, 1);

  return true;
}

function copyTask(task) {
  return { ...task };
}

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
};
