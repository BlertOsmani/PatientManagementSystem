'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Visit.belongsTo(models.Patient, { foreignKey: 'patient_id' });
      Visit.belongsTo(models.Appointment, { foreignKey: 'appointment_id' });
      Visit.belongsTo(models.Department, { foreignKey: 'department_id' });
      Visit.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
    }
  }
  Visit.init({
    patient_id: DataTypes.INTEGER,
    visit_date: DataTypes.DATE,
    visit_time: DataTypes.TIME,
    reason_for_visit: DataTypes.TEXT,
    appointment_id: DataTypes.INTEGER,
    department_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Visit',
    tableName: 'Visits'
  });
  return Visit;
};