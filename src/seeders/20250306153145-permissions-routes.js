'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_permissions_routes', [
      {
        pero_id: 1,
        pero_des_name: 'Usuários',
        pero_des_description: 'Permissões para usuários',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_permissions_routes', {
      pero_id: {
        [Sequelize.Op.in]: [1, 2, 3, 4],
      },
    }, {});
  },
};
