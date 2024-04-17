const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const pessoaController = new PessoaController();

const router = Router();

router
  .get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res))
  .get('/pessoas/:id', (req, res) => pessoaController.pegaUmPorId(req, res))
  .post('/pessoas', (req, res) => pessoaController.criaNovo(req, res))
  .delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res));

module.exports = router;
