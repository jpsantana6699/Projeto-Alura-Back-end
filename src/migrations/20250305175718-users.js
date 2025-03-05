'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_users', {
      use_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      use_des_name: {
        allowNull: false,
        type: Sequelize.STRING(80),
      },
      use_des_email: {
        allowNull: false,
        type: Sequelize.STRING(320),
      },
      use_des_password: {
        allowNull: false,
        type: Sequelize.STRING(60),
      },
      use_ind_active: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN,
      },
      use_dat_created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      use_dat_updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      use_dat_deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    }, {
      uniqueKeys: {
        PK_tb_users: {
          fields: ['use_des_email'],
        },
      },
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('tb_users');
  },
};
