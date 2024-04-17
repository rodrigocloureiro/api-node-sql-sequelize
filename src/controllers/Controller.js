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
}

module.exports = Controller;
