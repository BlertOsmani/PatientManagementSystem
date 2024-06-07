'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Visits', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Patients',
          key: 'id'
        },
        allowNull: false
      },
      visit_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      visit_time: {
        type: Sequelize.TIME,
        allowNull: false
      },
      reason_for_visit: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      appointment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Appointments',
          key: 'id'
        },
        allowNull: true
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Departments',
          key: 'id'
        },
        allowNull: false
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Doctors',
          key: 'id'
        },
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          isIn: [['Checked-In', 'In-Progress', 'Completed', 'Cancelled']]
        }
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true
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
    await queryInterface.dropTable('Visits');
  }
};