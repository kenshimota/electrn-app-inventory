'use strict'

const Visit = require('../models/Visit.js');
const empty = require('../helpers/empty.js');


const Visits = {

    /**
     * Ruta que muestra las visitas de un cliente
     * 
     * @returns employees
     */
    'index-visits': async function(params) {
        try {

            if(empty(params.id)) throw new Error("Debe especificar un cliente");

            return await Visit.findAll({where: {id:params.id}, raw:true});
            
        } catch (error) {
            return {message: error.message, code: 1};
        }
    },


    /**
     * Metodo que crea una nueva visita
     * 
     * @param {Json} params 
     * @returns message
     */
    'create-visit': async function(params) {

        try {

            await Visit.create({
                date: params.date,
                client_id: params.client_id,
                reason_visit: params.reason_visit,
                attended_by: params.attended_by
            });
    
            return { message: "Agregado con exito", code: 1 };
        
        } catch (error) {
            return { message: error.message, code: 0 };
        }

    },
    

    /**
     * funcion que muestra una visita de un cliente
     * 
     * @param {int} id 
     * @returns {json} visit
     */
    'show-visit': async function(id) {
        try {
            const visit = await Visit.findByPk(id, {raw: true});

            if(visit === null) throw new Error("Esta visita no existe");

            return visit;

        }catch(error) {
            return { message: error.message, code: 0 };
        }
    },
    
    /**
     * funcion que actuliza los datos de una visita
     * 
     * @param {*} params 
     * @returns message
     */
    'update-visit': async function(params) {
        try {
            return { message: "Actualizado correctamente", code: 1 };
        } catch (error) {
            return { message: error.message, code: 0 };
        }
    },
    

    /**
     * funcion que elimina una visita
     * 
     * @param {*} params 
     * @returns message
     */
    'destroy-visit': async function destroy(id) {
        try {

            let visit = await Visit.findByPk(id);

            if(visit === null) throw new Error("El empleado no existe");

            visit.destroy();

            return {message: "Eliminado correctamente", code: 1};
            
        } catch (error) {
            return {message: error.message, code: 0};
        }

    }

}

module.exports = Visits;
