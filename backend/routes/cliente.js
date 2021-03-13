const express = require('express');
const { list, create, clienteById, remove } = require('../controllers/clienteController');
const router = express.Router();

// MVC = modelo vista Controlador

router.get('/clientes', list)
router.post('/registrarCliente', create)
router.delete('/:clienteById', remove)
router.param('clienteById', clienteById)

module.exports = router;

