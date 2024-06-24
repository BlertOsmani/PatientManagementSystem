'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      Doctor.belongsTo(models.User, {foreignKey: 'user_id'});
      Doctor.belongsTo(models.Department, {foreignKey: 'department_id'});
      Doctor.hasMany(models.Appointment, {foreignKey: 'doctor_id'});
    }
  }
  Doctor.init({
    user_id: DataTypes.INTEGER,
    department_id: DataTypes.INTEGER,
    specialization: DataTypes.STRING,
    license_number: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};