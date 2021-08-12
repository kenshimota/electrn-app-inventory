'use strict'

const VisitsController = require('../controllers/VisitsController.js');

const visits = {

	'index-visits': async function(params) {
		return await VisitsController.index(params);
	},

	'create-visit': async function (params) {
		return await VisitsController.create(params);
	},

	'show-visit': async function (params) {
		return await VisitsController.show(params);
	},

	'update-visit': async function (params) {
		return await VisitsController.update(params);
	},

	'destroy-visit': async function (params) {
		return await VisitsController.destroy(params);
	},

};

module.exports = visits;
