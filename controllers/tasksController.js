const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render('index', { tasks });
  } catch (err) {
    res.status(500).send('Error retrieving tasks');
  }
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/', async (req, res) => {
  try {
    await Task.create(req.body);
    res.redirect('/tasks');
  } catch (err) {
    res.status(500).send('Error creating task');
  }
});

router.get('/:id/edit', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.render('edit', { task });
  } catch (err) {
    res.status(500).send('Error loading edit form');
  }
});

router.put('/:id', async (req, res) => {
  try {
    req.body.completed = req.body.completed ? true : false;
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/tasks');
  } catch (err) {
    res.status(500).send('Error updating task');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/tasks');
  } catch (err) {
    res.status(500).send('Error deleting task');
  }
});

module.exports = router;
