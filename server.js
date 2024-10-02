require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const taskRoutes = require('./routes/tasks');

const app = express();

mongoose.connect(process.env.MONGODB_URI);

app.get('/', (req, res) => {
  res.render('index');
});
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));  
app.use(express.static(path.join(__dirname, 'public'))); 
app.set('view engine', 'ejs');

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("Server running on port 3000");
});



