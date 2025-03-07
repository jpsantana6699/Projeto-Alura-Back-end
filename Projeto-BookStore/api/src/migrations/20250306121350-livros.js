/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_livros', {
      liv_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cat_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_categorias',
          key: 'cat_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      liv_titulo: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      liv_descricao: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      liv_preco: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      liv_editora: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      liv_paginas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      liv_ind_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      liv_dat_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      liv_dat_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      liv_dat_deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('tb_livros');
  },
};
