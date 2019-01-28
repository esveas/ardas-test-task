import taskTestData from '../testData/tasks';

export function getTasks(params = {}) {
  let tasks = localStorage.getItem('LocalTaskList');

  if (!tasks) {
    localStorage.setItem('LocalTaskList', JSON.stringify(taskTestData));
    tasks = taskTestData;
  }
  tasks = JSON.parse(tasks);
  if (params.obj_status) {
    tasks = tasks.filter(item => item.obj_status === params.obj_status);
  }

  return Promise.resolve(tasks);
}

export function updateTask(id, data) {
  let tasks = localStorage.getItem('LocalTaskList');
  tasks = tasks ? JSON.parse(tasks) : [];

  let taskIndex = -1;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      taskIndex = i;
      break;
    }
  }

  if (taskIndex === -1) {
    return Promise.reject(new Error('Task not exist'));
  }

  const updatedTask = { ...tasks[taskIndex], ...data };
  tasks[taskIndex] = updatedTask;
  localStorage.setItem('LocalTaskList', JSON.stringify(tasks));

  return Promise.resolve(updatedTask);
}

export function getTaskById(id) {
  let tasks = localStorage.getItem('LocalTaskList');
  tasks = tasks ? JSON.parse(tasks) : [];

  let taskIndex = -1;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      taskIndex = i;
      break;
    }
  }

  if (taskIndex === -1) {
    return Promise.reject(new Error('Task not exist'));
  }

  return Promise.resolve(tasks[taskIndex]);
}
