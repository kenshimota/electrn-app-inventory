const {DataTypes } = require("sequelize");
const sequelize = require('../connection.js');

const Client = sequelize.define("clients", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {            
            notNull: {
                args: true,
                msg: "Debes ingresar el nombre del cliente"
            },
            notEmpty: {
                args: true,
                msg: "El nombre del cliente no es valido"
            }
        }
    },
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Debes ingresar el apellido del cliente"
            },
            notEmpty: {
                args: true,
                msg: "El apellido del cliente no es valido"
            }
        }
    },
    email: {
        type: DataTypes.TEXT,
        allowNull:true,
        unique: true,
        validate: {
            isEmail: {
                args: true,
                msg: "El correo ingresado no es correcto"
            },
            isEmail: {
                args: true,
                msg: "Debes ingresar un correo electronico valido"
            }
        }
    },
    date_birth: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                args: true,
                msg: "La fecha de nacimiento no es valida"
            }
        }
    },
    phone: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La direccion no es valida"
            },
            notNull: {
                args: true,
                msg: "Debes ingresar la direccion del cliente"
            },
        }
    },
    how_you_find_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "how_you_finds",
            key:"id"
        },
        validate: {
            notEmpty: {
                args: true,
                msg: "Debes ingresar como el cliente se entero de la empresa"
            },
            notNull: {
                args: true,
                msg: "Debe especificar como el cliente se entro de la empresa"
            },
        }
    },
});


module.exports = Client;