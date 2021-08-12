'use strict'

const EmployeesController = require('../controllers/EmployeesController.js');

const employee = {

	'index-employees': async function() {
		return await EmployeesController.index();
	},

	'create-employee': async function (params) {
		return await EmployeesController.create(params);
	},

	'show-employee': async function (params) {
		return await EmployeesController.show(params);
	},

	'update-employee': async function (params) {
		return await EmployeesController.update(params);
	},

	'destroy-employee': async function (params) {
		return await EmployeesController.destroy(params);
	},

};

module.exports = employee;
