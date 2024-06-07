'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Patients',
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
      department_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Departments',
          key: 'id'
        },
        allowNull: false
      },
      appointment_date: {
        type: Sequelize.DATE
      },
      appointment_time: {
        type: Sequelize.TIME
      },
      appointment_type: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          isIn: [['Consultation', 'Follow-up', 'Diagnostic']]
        }
      },
      status: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          isIn: [['Scheduled', 'Completed', 'Cancelled']]
        }
      },
      notes: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Appointments');
  }
};