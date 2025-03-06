'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_users_permissions', {
      usp_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      use_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_users',
          key: 'use_id',
        },
      },
      per_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_permissions',
          key: 'per_id',
        },
      },
      usp_dat_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      usp_dat_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      usp_dat_deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    }, {
      uniqueKeys: {
        PK_tb_users: {
          fields: ['use_id', 'per_id'],
        },
      },
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('tb_users_permissions');
  },
};
