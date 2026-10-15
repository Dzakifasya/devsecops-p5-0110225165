let tasks = [
  { id: 1, title: 'Setup Pipeline DevSecOps P5', completed: true },
  { id: 2, title: 'Integrasi Semgrep SAST Scan', completed: true }
];

class TaskModel {
  static getAll() {
    return tasks;
  }

  static getById(id) {
    return tasks.find(t => t.id === parseInt(id, 10));
  }

  static create(title) {
    const newTask = { id: tasks.length + 1, title, completed: false };
    tasks.push(newTask);
    return newTask;
  }
}

module.exports = TaskModel;