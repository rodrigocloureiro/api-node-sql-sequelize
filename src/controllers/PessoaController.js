const database = require('../models');

class PessoaController {
  static async pegaTodas(req, res) {
    try {
      const listaPessoas = await database.Pessoa.findAll();
      return res.status(200).json(listaPessoas);
    } catch (erro) {
      // tratamento erro
    }
  }
}

module.exports = PessoaController;
