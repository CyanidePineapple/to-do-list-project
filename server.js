require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const tasksController = require('./controllers/tasksController');

const path = require("path")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));  
app.use(methodOverride('_method'));  
app.use(morgan('dev'));  
app.use(express.static(path.join(__dirname, "public")));


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('MongoDB connection error:', err));

app.use('/tasks', tasksController);  

app.get('/', (req, res) => {
  res.redirect('/tasks');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




