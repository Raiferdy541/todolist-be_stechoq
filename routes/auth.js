const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db/database');

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const result = await db.promise().query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    
        res.json({ message: 'Berhasil Daftar' });
      } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
    
        const [user] = await db.promise().query('SELECT * FROM users WHERE username = ?', [username]);
    
        if (user.length === 0) {
          return res.status(401).json({ error: 'Silahkan Daftar terlebih dahulu, Autentikasi Gagal' });
        }
    
        const match = await bcrypt.compare(password, user[0].password);
        if (!match) {
          return res.status(401).json({ error: 'Password tidak sesuai, Autentikasi Gagal' });
        }
    
        const token = jwt.sign({ userId: user[0].id }, 'jwt', { expiresIn: '1h' });
    
        res.json({ token });
      } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

module.exports = router;
