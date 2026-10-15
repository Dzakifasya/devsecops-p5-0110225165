const TaskModel = require('./taskModel');

exports.getTasks = (req, res) => {
  res.json({ success: true, data: TaskModel.getAll() });
};

exports.getTaskById = (req, res) => {
  const task = TaskModel.getById(req.params.id);
  if (!task) {
    return res.status(404).json({ success: false, message: 'Task tidak ditemukan' });
  }
  res.json({ success: true, data: task });
};

exports.createTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, message: 'Title wajib diisi' });
  }
  const newTask = TaskModel.create(title);
  res.status(201).json({ success: true, data: newTask });
};