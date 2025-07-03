'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_permissions', [
      {
        per_id: 1,
        pes_id: 1,
        pero_id: 1,
        pet_id: 1,
        per_des_description: 'Permite criar usuários',
      },
      {
        per_id: 2,
        pes_id:2,
        pero_id: 1,
        pet_id: 2,
        per_des_description: 'Permite listar usuários',
      },
      {
        per_id: 3,
        pes_id: 3,
        pero_id: 1,
        pet_id: 3,
        per_des_description: 'Permite atualizar usuários',
      },
      {
        per_id: 4,
        pes_id: 4,
        pero_id: 1,
        pet_id: 4,
        per_des_description: 'Permite deletar usuários',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_permissions', {
      per_id: {
        [Sequelize.Op.in]: [1, 2, 3, 4],
      },
    }, {});
  },
};
