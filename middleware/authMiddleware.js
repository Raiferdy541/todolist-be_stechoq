const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).json({ error: 'Tidak Terautentikasi' });
  }

  const token = authHeader.split(' ')[1]; // Ambil token setelah string 'Bearer'

  try {
    const decoded = jwt.verify(token, 'jwt'); 
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token JWT Tidak Valid' });
  }
};

module.exports = verifyToken;
