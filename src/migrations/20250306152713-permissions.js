'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_permissions', {
      per_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_permissions_types',
          key: 'pet_id',
        },
      },
      pero_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_permissions_routes',
          key: 'pero_id',
        },
      },
      pet_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_permissions_types',
          key: 'pet_id',
        },
      },
      per_des_description: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      per_dat_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      per_dat_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      per_dat_deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    }, {
      uniqueKeys: {
        PK_tb_permissions: {
          fields: ['pet_id', 'pero_id'],
        },
      },
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('tb_permissions');
  },
};
