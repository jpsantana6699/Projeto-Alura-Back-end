'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_permissions_types', [
      {
        pet_id: 1,
        pet_des_name: 'Criação',
        pet_des_description: 'Criação de registros',
      },
      {
        pet_id: 2,
        pet_des_name: 'Leitura',
        pet_des_description: 'Leitura de registros',
      },
      {
        pet_id: 3,
        pet_des_name: 'Atualização',
        pet_des_description: 'Atualização de registros',
      },
      {
        pet_id: 4,
        pet_des_name: 'Exclusão',
        pet_des_description: 'Exclusão de registros',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_permissions_types', {
      pet_id: {
        [Sequelize.Op.in]: [1, 2, 3, 4],
      },
    }, {});
  },
};
