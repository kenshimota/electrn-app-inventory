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
        allowNull:false,
        unique: true,
        validate: {
            isEmail: {
                args: true,
                msg: "El correo ingresado no es correcto"
            },
            notNull: {
                args: true,
                msg: "Debe ingresar El correo electronico del cliente"
            },
            notEmpty: {
                args: true,
                msg: "Debes ingresar un correo electronico valido"
            },
            isEmail: {
                args: true,
                msg: "Debes ingresar un correo electronico valido"
            }
        }
    },
    date_birth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La fecha de nacimiento no es valida"
            },
            isDate: {
                args: true,
                msg: "La fecha de nacimiento no es valida"
            },
            notNull: {
                args: true,
                msg: "Debes ingresar la fecha de nacimiento del cliente"
            }
        }
    },
    phone: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El numero de telefono no es valido"
            },
            notNull: {
                args: true,
                msg: "Debes ingresar el numero de telefono del cliente"
            },
        }
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
    discovered: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Debes ingresar la informacion correcta"
            },
            notNull: {
                args: true,
                msg: "Este campo es obligatorio"
            },
        }
    },
});


module.exports = Client;