'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tb_users', [
      {
        use_id: 1,
        use_des_name: 'Admin',
        use_des_email: 'admin@email.com.br',
        // eslint-disable-next-line @stylistic/max-len
        use_des_password: '$2a$12$FgVQzsV/Uez0Wv/HHZgvrOTpaJdAYh0V.KM.mZOx51kv10QBckU6q',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_users', {
      use_id: {
        [Sequelize.Op.in]: [1],
      },
    }, {});
  },
};
