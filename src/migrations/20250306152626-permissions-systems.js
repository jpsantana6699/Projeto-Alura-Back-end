'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_permissions_systems', {
      pes_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pes_des_name: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      pes_des_description: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      pes_dat_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      pes_dat_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      pes_dat_deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    }, {
      uniqueKeys: {
        FK1_tb_permissions_systems: {
          fields: ['pes_des_name'],
        },
      },
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('tb_permissions_systems');
  },
};
