const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router
  .get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res))
  .get('/pessoas/todos', (req, res) => pessoaController.pegaPessoasEscopo(req, res))
  .get('/pessoas/:id', (req, res) => pessoaController.pegaUmPorId(req, res))
  .post('/pessoas', (req, res) => pessoaController.criaNovo(req, res))
  .put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res))
  .delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res))
  .get('/pessoas/:estudanteId/matriculas', (req, res) => pessoaController.pegaMatriculas(req, res))
  .post('/pessoas/:estudanteId/matriculas', (req, res) => matriculaController.criaNovo(req, res));

module.exports = router;
