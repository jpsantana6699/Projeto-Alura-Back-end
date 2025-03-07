/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_livro_autores', [
      { liv_id: 1, aut_id: 1 }, 
      { liv_id: 1, aut_id: 2 }, 
      { liv_id: 2, aut_id: 2 },
      { liv_id: 2, aut_id: 3 },
    ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('tb_livro_autores', null, {});
  },
};
