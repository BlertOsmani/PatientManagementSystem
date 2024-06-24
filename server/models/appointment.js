'use strict';
const { DATE } = require('mysql/lib/protocol/constants/types');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.Patient, { foreignKey: 'patient_id' });
      Appointment.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
      Appointment.belongsTo(models.Department, { foreignKey: 'department_id' });
    }
  }
  Appointment.init({
    patient_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    department_id: DataTypes.INTEGER,
    appointment_date: DataTypes.DATE,
    appointment_time: DataTypes.TIME,
    appointment_type: DataTypes.STRING,
    status: DataTypes.STRING,
    notes: DataTypes.TEXT,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};