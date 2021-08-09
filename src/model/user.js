const {DataTypes } = require("sequelize");
const sequelize = require('../connection.js');

const User = sequelize.define("user", {
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
                arg: true,
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
                arg: true,
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
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Debe ingresar una contraseña"
            }
        }
    },
});

(async () => {
  await sequelize.sync();
  // Code here
})();

module.exports = User;