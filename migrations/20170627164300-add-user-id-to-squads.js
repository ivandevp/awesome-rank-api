'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		var options = { raw: true };

    return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', options)
      .then(function () {
        queryInterface.addColumn('squads', 'userId', {
          type: Sequelize.INTEGER,
          allowNull: Sequelize,
          defaultValue: 0,
          references: {
            model: 'users',
            key: 'id'
          }
        });
      });
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.removeColumn('userId');
	}
};
