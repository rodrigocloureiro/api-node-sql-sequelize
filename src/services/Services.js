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
}

module.exports = Services;
