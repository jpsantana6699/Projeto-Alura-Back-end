'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_roles_permissions', [
      {
        rop_id: 1,
        rol_id: 1,
        per_id: 1,
      },
      {
        rop_id: 2,
        rol_id: 1,
        per_id: 2,
      },
      {
        rop_id: 3,
        rol_id: 1,
        per_id: 3,
      },
      {
        rop_id: 4,
        rol_id: 1,
        per_id: 4,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_roles_permissions', {
      rop_id: {
        [Sequelize.Op.in]: [1, 2, 3, 4],
      },
    }, {});
  },
};
