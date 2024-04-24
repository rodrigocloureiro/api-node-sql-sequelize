'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association 
      Matricula.belongsTo(models.Pessoa, {
        foreignKey: 'estudante_id'
      }); // matriculas pertencem a (belongs to) pessoa
      Matricula.belongsTo(models.Curso, {
        foreignKey: 'curso_id'
      }); // matriculas pertencem a (belongs to) curso
    }
  }
  Matricula.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matricula',
    tableName: 'matriculas',
    paranoid: true,
  });
  return Matricula;
};