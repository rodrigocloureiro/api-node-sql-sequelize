class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaRegistros = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaRegistros);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(id);
      return res.status(200).json(umRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
      if (!foiAtualizado) return res.status(400).json({ mensagem: 'o registro não foi atualizado' });
      return res.status(200).json({ mensagem: 'registro atualizado com sucesso' });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(201).json(novoRegistroCriado);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.excluiRegistro(id);
      return res.status(200).json({ mensagem: `id ${id} deletado` });
      // return res.sendStatus(204);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = Controller;
