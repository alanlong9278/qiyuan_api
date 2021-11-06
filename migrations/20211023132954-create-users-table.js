'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', { 
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			nick_name: Sequelize.STRING,
			avatar_url: Sequelize.STRING,
			gender: Sequelize.INTEGER,
			open_id: Sequelize.STRING,
			session_key: Sequelize.STRING,
			created_at: Sequelize.DATE,
			updated_at: Sequelize.DATE,
    },{
			charset: 'utf8'
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('users');
  }
};
