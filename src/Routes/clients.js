'use strict'

const ClientsController = require('../controllers/ClientsController.js');

const clients = {

	'index-clients': async function() {
		return await ClientsController.index();
	},

	'create-client': async function (params) {
		return await ClientsController.create(params);
	},

	'show-client': async function (params) {
		return await ClientsController.show(params);
	},

	'update-client': async function (params) {
		return await ClientsController.update(params);
	},

	'destroy-client': async function (params) {
		return await ClientsController.destroy(params);
	},

};

module.exports = clients;
