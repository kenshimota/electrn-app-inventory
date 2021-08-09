'use strict'

const sequelize = require('../connection.js');
const User = require('../model/User.js');
const { hash } = require('../helpers/hash.js');


const UsersController = {

    index: async function() {

        return await User.findAll();

    },
    
    create: async function(params) {

        try {
            const new_user = await User.create({
                name: params.name,
                lastname: params.lastname,
                email: params.email,
                password: await hash(params.password, 10).catch(err => {throw new Error('Debes ingresar una contraseña')})
            });
        
            new_user.name = "Jesus";
            await new_user.save();
    
            return "Agregado con exito";
        
        } catch (error) {
            let messages = [];
            
            // si hay multiples errores
            if( error.errors != undefined) {
                
                error.errors.forEach(err => {
                    messages.push(err.message);
                });

            // en caso que solo haya un error
            }else {
                messages.push( error.message );
            }




            return messages;
        }

    },
    
    show: function(id) {},
    
    update: function(id) {},
    
    destroy: function destroy(id) {}

}

module.exports = UsersController;



