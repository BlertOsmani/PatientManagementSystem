'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Supplier.hasMany(models.Inventory, { foreignKey: 'supplier_id' });
    }
  }
  Supplier.init({
    name: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    address: DataTypes.TEXT,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Supplier',
  });
  return Supplier;
};