'use_strict'

const Department = require('../models/Department.js');
const empty = require('../helpers/empty.js');

let DepartmentsController = {

    /**
     * Ruta que muestra todos los departamentos
     * 
     * @returns departments
     */
    index: async function() {
        try {
            return await Department.findAll({raw:true});
        } catch (error) {
            return { message: error.message, code:0} ;
        }
    },


    /**
     * Metodo que crea un nuevo departamento
     * 
     * @param {Json} params 
     * @returns message
     */
    create: async function(params) {
        try {
            await Department.create({name: params.name});
            return {message: "Agregado con exito", code: 1};
        } catch (error) {
            return { message: error.message, code:0 };
        }
    },


    /**
     * funcion que muestra un departamento
     * 
     * @param {int} id 
     * @returns {json} department
     */
    show: async function(params) {
        try {
            let departament = await Department.findByPk(params.id, {raw: true});

            if(departament === null) throw new Error("Este departamento no existe");

            return departament;

        } catch (error) {
            return {message: error.message, code: 0};
        }
    },


    /**
     * funcion que actualiza un departamento
     * 
     * @param {*} params 
     * @returns message
     */
    update: async function(params) {
        try {
            if( empty(params.name) ) throw new Error("El nombre del departamento es obligatorio");

            let departament = await Department.findByPk(params.id);
            
            if( departament === null) throw new Error("El departamento no existe");

            departament.name = params.name;
            await departament.save();

            return {message: "Actualizado con correctamente", code: 1};
            
        } catch (error) {
            return { message: error.message, code: 0 };
        }
    },


    
    /**
     * funcion que elimina un departamento
     * 
     * @param {*} params 
     * @returns message
     */
    destroy: async function(params) {
        try {
            let departament = await Department.findByPk(params.id);

            if(departament === null) throw new Error("Este departamento no existe");

            departament.destroy();

            return {message: "Eliminado Correctamente", code: 1};

        } catch (error) {
            return {message: error.message, code: 0};
        }
    }
};

module.exports = DepartmentsController;