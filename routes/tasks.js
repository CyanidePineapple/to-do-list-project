const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res) => {
  const tasks = await Task.find({});
  res.render('tasks/index', { tasks });
});

router.get('/new', (req, res) => {
  res.render('tasks/new');
});

router.post('/', async (req, res) => {
  const { title, category } = req.body;
  const newTask = new Task({
    title,
    category: { name: category }
  });
  await newTask.save();
  res.redirect('/tasks');
});

router.get('/:id/edit', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.render('tasks/edit', { task });
});

router.put('/:id', async (req, res) => {
  const { title, category } = req.body;
  await Task.findByIdAndUpdate(req.params.id, {
    title,
    category: { name: category }
  });
  res.redirect('/tasks');
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/tasks');
});

module.exports = router;
