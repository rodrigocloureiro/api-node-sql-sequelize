const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }

  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async pegaPessoaPorEscopo() {
    const listaPessoasPorEscopo = await super.pegaRegistrosPorEscopo('todosOsRegistros');
    return listaPessoasPorEscopo;
  }
}

module.exports = PessoaServices;
