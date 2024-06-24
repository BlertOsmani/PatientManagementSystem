'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.Invoice, { foreignKey: 'invoice_id' });
    }
  }
  Payment.init({
    invoice_id: DataTypes.INTEGER,
    payment_date: DataTypes.DATE,
    amount: DataTypes.DECIMAL,
    payment_method: DataTypes.STRING,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};