'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_users_permissions', [
      {
        usp_id: 1,
        use_id: 1,
        per_id: 1,
      },
      {
        usp_id: 2,
        use_id: 1,
        per_id: 2,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_users_permissions', {
      use_id: {
        [Sequelize.Op.in]: [1],
      },
    }, {});
  },
};
