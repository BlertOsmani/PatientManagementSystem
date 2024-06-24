'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Prescriptions', 'updated_by', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Users', // Name of the related table
        key: 'id', // Key in the related table that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Prescriptions', 'updated_by');
  }
};
