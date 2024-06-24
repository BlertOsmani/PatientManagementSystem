'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {

    }
  }
  Patient.init({
    personal_no: DataTypes.STRING,
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
    insurance_number: DataTypes.STRING,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};