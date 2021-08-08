const UsersController = require('../controllers/UsersController.js');

const users = {

	index: async function() {
		return await UsersController.index();
	},

	'create': async function (params) {
		return await UsersController.create(params);
	},

};

module.exports = users;
