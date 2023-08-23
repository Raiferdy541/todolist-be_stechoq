// Raihan Ferdyanza Back End - UNILA - Stechoq
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
const todolistRoutes = require('./routes/todolist');

app.use('/', authRoutes);
app.use('/todolist', todolistRoutes);

app.listen(10001, () => {
  console.log('Server berjalan di port 10001');
});
