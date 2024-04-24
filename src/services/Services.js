const datasource = require('../database/models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return datasource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return datasource[this.model].findByPk(id);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listaDeRegistrosAtualizados = await datasource[this.model].update(dadosAtualizados, {
      where: {
        id: id,
      },
    });
    if (listaDeRegistrosAtualizados[0] === 0) return false;
    return true;
  }

  async criaRegistro(dadosDoRegistro) {
    return datasource[this.model].create(dadosDoRegistro);
  }

  async excluiRegistro(id) {
    return datasource[this.model].destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = Services;
