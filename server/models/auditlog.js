'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuditLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AuditLog.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  AuditLog.init({
    user_id: DataTypes.INTEGER,
    action: DataTypes.TEXT,
    details: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'AuditLog',
  });
  return AuditLog;
};