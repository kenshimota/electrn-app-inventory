'use strict'

const DepartmentsController = require('../controllers/DepartmentsController.js');

const departament = {

	'index-departaments': async function() {
		return await DepartmentsController.index();
	},

	'create-departament': async function (params) {
		return await DepartmentsController.create(params);
	},

	'show-departament': async function (params) {
		return await DepartmentsController.show(params);
	},

	'update-departament': async function (params) {
		return await DepartmentsController.update(params);
	},

	'destroy-departament': async function (params) {
		return await DepartmentsController.destroy(params);
	},

};

module.exports = departament;
