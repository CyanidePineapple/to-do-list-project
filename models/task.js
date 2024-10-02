const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }
});

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  category: categorySchema 
});

module.exports = mongoose.model('Task', taskSchema);
