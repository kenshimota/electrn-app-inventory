'use strict'

const Employee = require('../models/Employee.js');
const empty = require('../helpers/empty.js');



const EmployeesController = {

    /**
     * Ruta que muestra todos los empleados
     * 
     * @returns employees
     */
    index: async function() {

        return await Employee.findAll({raw:true});

    },


    /**
     * Metodo que crea un nuevo empleado
     * 
     * @param {Json} params 
     * @returns message
     */
    create: async function(params) {

        try {

            await Employee.create({
                name: params.name,
                lastname: params.lastname,
                email: params.email
            });
    
            return {message: "Agregado con exito", code: 1};
        
        } catch (error) {
            return {message: error.message, code: 0};
        }

    },
    

    /**
     * funcion que muestra un usuario
     * 
     * @param {int} id 
     * @returns {json} employee
     */
    show: async function(id) {
        try {
            const employee = await Employee.findByPk(id, {raw: true});

            if(employee === null) throw new Error("Este empleado no Existe");

            return employee;

        }catch(error) {
            return {message: error.message, code: 0};
        }
    },
    


    /**
     * funcion que actualiza los datos de un empleado
     * 
     * @param {*} params 
     * @returns 
     */
    update: async function(params) {

        try {

            // valido que hayan llegado bien los datos
            if(empty(params.name)) throw new Error("El nombre es Obligatorio");
            if(empty(params.lastname)) throw new Error("El apellido es Obligatorio");
            if(empty(params.email)) throw new Error("El email es Obligatorio");

            // busco los datos del del empleado
            let employee = await Employee.findByPk(params.id);

            // verifico que exista
            if(employee === null) {
                throw new Error("Este empleado no existe");
            }

            // actualizo la informacion
            employee.name = params.name;
            employee.lastname = params.lastname;
            employee.email = params.email;

            employee.save();

            return { message: "Actualizado Correctamente", code: 1 };

        } catch (error) {
            return { message: error.message, code: 0 };
        }


    },
    

    /**
     * funcion que elimina a un empleado
     * 
     * @param {*} params 
     * @returns 
     */
    destroy: async function destroy(id) {
        try {
            let employee = await employee.findByPk(id);

            if(employee === null) throw new Error("El empleado no existe");
            
            // elimino el empleado
            employee.destroy();

            return { message: error.message, code: 1 };

        } catch (error) {
            return { message: error.message, code: 0 };
        }
    }

}

module.exports = EmployeesController;