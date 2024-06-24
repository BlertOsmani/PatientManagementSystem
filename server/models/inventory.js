'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inventory.belongsTo(models.Supplier, { foreignKey: 'supplier_id' });
    }
  }
  Inventory.init({
    item_name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    reorder_level: DataTypes.INTEGER,
    supplier_id: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};