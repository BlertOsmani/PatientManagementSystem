'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patient.init({
    first_name: DataTypes.STRING,
    parent: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    gender: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    address: DataTypes.TEXT,
    emergency_contact: DataTypes.TEXT,
    medical_history: DataTypes.TEXT,
    insurance_provider: DataTypes.STRING,
    insurance_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
    tableName: 'Patients'
  });
  return Patient;
};