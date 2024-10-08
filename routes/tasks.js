const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getTasks);
router.get('/new', taskController.renderNewTaskForm);
router.post('/', taskController.createTask);
router.get('/:id/edit', taskController.renderEditTaskForm);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
