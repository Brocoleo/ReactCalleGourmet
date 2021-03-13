const express = require('express');
const router = express.Router();

const { list, read, create, remove, comidaById, photo } = require('../controllers/comidaController');

// list 
router.get('/comidas', list);
router.post('/crearPlato', create)
router.get('/photo/:comidaById', photo)
router.get('/:comidaById', read)
router.delete('/:comidaById', remove)
router.param("comidaById", comidaById);
module.exports = router;