/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_livros', [
      {
        cat_id: 1,
        liv_titulo: 'Livro A',
        liv_descricao: 'Descrição do Livro A',
        liv_preco: 29.99,
        liv_editora: 'Editora X',
        liv_paginas: 200,
        liv_ind_active: true,
        liv_dat_created_at: new Date(),
        liv_dat_updated_at: new Date(),
      },
      {
        cat_id: 2,
        liv_titulo: 'Livro B',
        liv_descricao: 'Descrição do Livro B',
        liv_preco: 39.99,
        liv_editora: 'Editora Y',
        liv_paginas: 300,
        liv_ind_active: true,
        liv_dat_created_at: new Date(),
        liv_dat_updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_livros', {
      liv_id: {
        [Sequelize.Op.in]: [1, 2],
      },
    }, {});
  },
};
