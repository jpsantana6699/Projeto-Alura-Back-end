/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_autores', [
      {
        aut_nome: 'Autor A',
        aut_nacionalidade: 'Brasileiro',
        aut_ind_active: true,
        aut_dat_created_at: new Date(),
        aut_dat_updated_at: new Date(),
      },
      {
        aut_nome: 'Autor B',
        aut_nacionalidade: 'Americano',
        aut_ind_active: true,
        aut_dat_created_at: new Date(),
        aut_dat_updated_at: new Date(),
      },
      {
        aut_nome: 'Autor C',
        aut_nacionalidade: 'Inglês',
        aut_ind_active: true,
        aut_dat_created_at: new Date(),
        aut_dat_updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_autores', {
      aut_id: {
        [Sequelize.Op.in]: [1, 2, 3],
      },
    }, {});
  },
};
