const datasource = require('../models');

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
