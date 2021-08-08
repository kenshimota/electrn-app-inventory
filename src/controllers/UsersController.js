const sequelize = require('../connection.js');
const User = require('../model/user.js');
const { hash } = require('../helpers/hash.js');

const UsersController = {

    index: async function() {

        return await User.findAll();

    },
    
    create: async function(params) {
        
        const new_user = await User.create({
            name: params.name,
            lastname: params.lastname,
            email: params.email,
            password: await hash(params.password, 10)
        });
    
        new_user.name = "Jesus";
        await new_user.save();

        return "Agregado con existo";
    },
    
    show: function(id) {},
    
    update: function(id) {},
    
    destroy: function destroy(id) {}

}

module.exports = UsersController;



