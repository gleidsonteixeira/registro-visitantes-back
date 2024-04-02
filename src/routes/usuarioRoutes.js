const express = require('express');
const { listarUsuarios } = require('../controllers/usuarioController');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send(await listarUsuarios());
});

module.exports = router;