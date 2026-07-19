const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const userModel = require('./models/user');
const dataConnection = require('./config/db');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res, next) => {
  console.log(5 + 10);
  next();
}, (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/about', (req, res) => {
  res.send('About Page!');
});

app.post('/get-form-data', async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await userModel.create({email, password });
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
