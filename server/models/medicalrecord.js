'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MedicalRecord.belongsTo(models.Patient, { foreignKey: 'patient_id' });
      MedicalRecord.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
      MedicalRecord.belongsTo(models.Department, { foreignKey: 'department_id' });
    }
  }
  MedicalRecord.init({
    patient_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    department_id: DataTypes.INTEGER,
    record_date: DataTypes.DATE,
    notes: DataTypes.TEXT,
    prescription: DataTypes.TEXT,
    diagnosis: DataTypes.TEXT,
    lab_results: DataTypes.TEXT,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MedicalRecord',
  });
  return MedicalRecord;
};