const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const db = require('../db/database');

router.post('/', authMiddleware, async (req, res) => {
    try {
        const { userId } = req;
        const { task, status } = req.body;
    
        await db.promise().query('INSERT INTO todolist (user_id, task, status) VALUES (?, ?, ?)', [userId, task, status]);
    
        res.json({ message: 'Task Berhasil Dibuat' });
      } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

router.get('/', authMiddleware, async (req, res) => {
    try {
        const { userId } = req;
    
        const [todolist] = await db.promise().query('SELECT * FROM todolist WHERE user_id = ?', [userId]);
    
        res.json({ todolist });
      } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const { userId } = req;
        const { id } = req.params;
        const { task, status } = req.body;
    
        await db.promise().query('UPDATE todolist SET task = ?, status = ? WHERE id = ? AND user_id = ?', [task, status, id, userId]);
    
        res.json({ message: 'Task Berhasil Diubah' });
      } catch (error) {
        res.status(500).json({ error: 'Error' });
      }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const { userId } = req;
        const { id } = req.params;
    
        await db.promise().query('DELETE FROM todolist WHERE id = ? AND user_id = ?', [id, userId]);
    
        res.json({ message: 'Task Berhasil Dihapus' });
      } catch (error) {
        res.status(500).json({ error: 'Error' });
      }
});

module.exports = router;
