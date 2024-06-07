'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doctor.belongsTo(models.User, {foreignKey: 'user_id'});
      Doctor.belongsTo(models.Department, {foreignKey: 'department_id'});
    }
  }
  Doctor.init({
    user_id: DataTypes.INTEGER,
    department_id: DataTypes.INTEGER,
    specialization: DataTypes.STRING,
    license_number: DataTypes.STRING,
    contact_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doctor',
    tableName: 'Doctors'
  });
  return Doctor;
};