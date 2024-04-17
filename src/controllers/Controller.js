class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaRegistros = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaRegistros);
    } catch (erro) {
      // tratamento de erro
    }
  }

  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(id);
      return res.status(200).json(umRegistro);
    } catch (erro) {
      // tratamento de erro
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(201).json(novoRegistroCriado);
    } catch (erro) {
      // tratamento de erro
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.excluiRegistro(id);
      return res.status(200).json({ mensagem: `id ${id} deletado` });
      // return res.sendStatus(204);
    } catch (erro) {
      // tratamento de erro
    }
  }
}

module.exports = Controller;
