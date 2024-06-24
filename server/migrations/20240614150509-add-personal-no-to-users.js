'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'personal_no', {
      type: Sequelize.STRING(10),
      allowNull: true,
    }, {
      after: 'id' // Place it after 'id' column
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'personal_no');
  }
};
