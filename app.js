const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todo_list-jwt'
});


app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.promise().query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

    res.json({ message: 'Berhasil Daftar' });
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const [user] = await db.promise().query('SELECT * FROM users WHERE username = ?', [username]);

    if (user.length === 0) {
      return res.status(401).json({ error: 'Autentikasi Gagal' });
    }

    const match = await bcrypt.compare(password, user[0].password);
    if (!match) {
      return res.status(401).json({ error: 'Autentikasi Gagal' });
    }

    const token = jwt.sign({ userId: user[0].id }, 'jwt', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});