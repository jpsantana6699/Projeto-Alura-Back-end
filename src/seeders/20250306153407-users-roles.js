'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_users_roles', [
      {
        usr_id: 1,
        use_id: 1,
        rol_id: 1,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_users_roles', {
      usr_id: {
        [Sequelize.Op.in]: [1],
      },
    }, {});
  },
};
