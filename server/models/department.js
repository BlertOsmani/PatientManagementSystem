'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.Appointment, { foreignKey: 'department_id' });
      Department.hasMany(models.Visit, { foreignKey: 'department_id' });
    }
  }
  Department.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};