/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_livro_autores', {
      liv_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_livros',
          key: 'liv_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      aut_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_autores',
          key: 'aut_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('tb_livro_autores');
  },
};
