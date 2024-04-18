const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();

const router = Router();

router
  .get('/categorias', (req, res) => categoriaController.pegaTodos(req, res))
  .get('/categorias/:id', (req, res) => categoriaController.pegaUmPorId(req, res))
  .post('/categorias', (req, res) => categoriaController.criaNovo(req, res))
  .put('/categorias/:id', (req, res) => categoriaController.atualiza(req, res))
  .delete('/categorias/:id', (req, res) => categoriaController.exclui(req, res));

module.exports = router;
