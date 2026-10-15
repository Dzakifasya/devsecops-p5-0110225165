const express = require('express');
const router = express.Router();
const taskController = require('./taskController');

router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.post('/tasks', taskController.createTask);

module.exports = router;