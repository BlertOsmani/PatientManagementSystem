'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personal_no:{
        type: Sequelize.STRING(10)
      },
      username: {
        type: Sequelize.STRING(50),
        unique:true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      password_salt:{
        type:Sequelize.STRING(256),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(150),
        unique: true,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      role: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          isIn: [['Admin', 'Doctor', 'Nurse', 'Receptionist']]
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};