/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_categorias', [
      {
        cat_nome: 'Ficção Científica',
        cat_descricao: 'Livros de ficção científica',
        cat_ind_active: true,
        cat_dat_created_at: new Date(),
        cat_dat_updated_at: new Date(),
      },
      {
        cat_nome: 'Fantasia',
        cat_descricao: 'Livros de fantasia',
        cat_ind_active: true,
        cat_dat_created_at: new Date(),
        cat_dat_updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_categorias', {
      cat_id: {
        [Sequelize.Op.in]: [1, 2],
      },
    }, {});
  },
};
