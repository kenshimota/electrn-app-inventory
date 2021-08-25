'use strict'

const Client = require('../models/Client.js');
const Visit = require('../models/Visit.js');
const empty = require('../helpers/empty.js');

const clients = {

	/**
	 * Ruta que muestra todos los Clientes
	 * 
	 * @returns clients
	 */
	'index-clients': async function() {
		try {
			return await Client.findAll({raw:true});
		} catch (error) {
			return { message: error.message, code:0} ;
		}
	},



    /**
     * Metodo que crea un nuevo cliente
     * 
     * @param {Json} params 
     * @returns message
     */
	 'create-client': async function(params) {
        try {

            // creo un nuevo cliente
            const new_client =  await Client.create({
                name: params.name,
                lastname: params.lastname,
                email: params.email,
                date_birth: params.date_birth,
                phone: params.phone,
                address: params.address,
                discovered: params.discovered,
            });

            // creo la visita del nuevo cliente
            await Visit.create( {
                date: params.date,
                client_id: new_client.id,
                reason_visit: params.reason_visit,
                attended_by: params.attended_by
            })

            return {message: "Agregado con exito", code: 1};
        } catch (error) {
            return { message: error.message, code:0 };
        }
    },



	/**
	 * funcion que muestra un cliente
	 * 
	 * @param {int} id 
	 * @returns {json} client
	 */
	'show-client': async function(params) {
		try {
			let client = await Client.findByPk(params.id, {raw: true});

			if(client === null) throw new Error("Este cliente no existe");

			return client;

		} catch (error) {
			return {message: error.message, code: 0};
		}
	},


	/**
	 * funcion que actualiza un cliente
	 * 
	 * @param {*} params 
	 * @returns message
	 */
	'update-client': async function(params) {

		try {

			if( empty(params.name) ) throw new Error("El nombre del cliente es obligatorio");
			if( empty(params.lastname) ) throw new Error("El apellido del cliente es obligatorio");
			if( empty(params.email) ) throw new Error("El correo del cliente es obligatorio");
			if( empty(params.date_birth) ) throw new Error("La fecha de nacimiento del cliente es obligatoria");
			if( empty(params.phone) ) throw new Error("El telefono del cliente es obligatorio");
			if( empty(params.address) ) throw new Error("La direccion del cliente es obligatoria");
			if( empty(params.discovered) ) throw new Error("Por favor ingrese como el cliente se entero de la empresa");

			let client = await Client.findByPk(params.id);
			
			if( client === null) throw new Error("El cliente no existe");

			client.name = params.name;
			client.lastname = params.lastname;
			client.email = params.email;
			client.date_birth = params.date_birth;
			client.phone = params.phone;
			client.address = params.address;
			client.discovered = params.discovered;

			await client.save();

			return {message: "Actualizado con correctamente", code: 1};
			
		} catch (error) {
			return { message: error.message, code: 0 };
		}
	},



	/**
	 * funcion que elimina un cliente
	 * 
	 * @param {*} params 
	 * @returns message
	 */
	'destroy-client': async function(params) {
		try {
			let client = await Client.findByPk(params.id);

			if(client === null) throw new Error("Este cliente no existe");

			client.destroy();

			return {message: "Eliminado Correctamente", code: 1};

		} catch (error) {
			return {message: error.message, code: 0};
		}
	}
};

module.exports = clients;
