const {DataTypes } = require("sequelize");
const sequelize = require('../connection.js');

const Employee = sequelize.define("employees", {
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
                msg: "Debes ingresar tu nombre"
            },
            notEmpty: {
                args: true,
                msg: "Debes ingresar un nombre valido"
            }
        }
    },
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Debes ingresar tu apellido"
            },
            notEmpty: {
                args: true,
                msg: "Debes ingresar un apellido valido"
            }
        }
    },
    email: {
        type: DataTypes.TEXT,
        allowNull:false,
        unique: true,
        validate: {
            notNull: {
                args: true,
                msg: "Debe ingresar un correo electronico"
            },
            notEmpty: {
                args: true,
                msg: "Debe ingresar un correo valido"
            },
            isEmail: {
                args: true,
                msg: "El correo Ingresado no es valido"
            }
        }
    }
});

module.exports = Employee;