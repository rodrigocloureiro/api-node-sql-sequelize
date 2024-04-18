const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();

const router = Router();

router
  .get('/cursos', (req, res) => cursoController.pegaTodos(req, res))
  .get('/cursos/:id', (req, res) => cursoController.pegaUmPorId(req, res))
  .post('/cursos', (req, res) => cursoController.criaNovo(req, res))
  .put('/cursos/:id', (req, res) => cursoController.atualiza(req, res))
  .delete('/cursos/:id', (req, res) => cursoController.exclui(req, res));

module.exports = router;
