'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_permissions_systems', [
      {
        pes_id: 1,
        pes_des_name: 'Administrador',
        pes_des_description: 'Administrador do sistema',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_permissons_systems', {
      pes_id: {
        [Sequelize.Op.in]: [1],
      },
    }, {});
  },
};
