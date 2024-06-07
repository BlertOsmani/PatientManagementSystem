'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Prescription.belongsTo(models.Patient, { foreignKey: 'patient_id' });
      Prescription.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
    }
  }
  Prescription.init({
    patient_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    medication: DataTypes.TEXT,
    dosage: DataTypes.TEXT,
    instructions: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Prescription',
    tableName: 'Prescriptions'
  });
  return Prescription;
};