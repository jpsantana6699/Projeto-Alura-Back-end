'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_roles', [
      {
        rol_id: 1,
        rol_des_name: 'Administrador',
        rol_des_description: 'Administrador do sistema',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_roles', {
      rol_id: {
        [Sequelize.Op.in]: [1],
      },
    }, {});
  },
};
