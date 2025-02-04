const express = require('express');
const router = express.Router();
const { obtenerProducciones, agregarProduccion } = require('../controllers/produccionController');

router.get('/', obtenerProducciones);
router.post('/', agregarProduccion);

module.exports = router;