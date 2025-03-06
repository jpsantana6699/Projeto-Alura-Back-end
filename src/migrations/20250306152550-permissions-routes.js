'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_permissions_routes', {
      pero_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pero_des_name: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      pero_des_description: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      pero_dat_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      pero_dat_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      pero_dat_deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    }, {
      uniqueKeys: {
        FK2_tb_permissions_routes: {
          fields: ['pero_des_name'],
        },
      },
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('tb_permissions_routes');
  },
};
