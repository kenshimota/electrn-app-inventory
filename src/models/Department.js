const {DataTypes } = require("sequelize");
const sequelize = require('../connection.js');

const Department = sequelize.define("departments", {
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
                msg: "El nombre del departamento no es valido"
            },
            notEmpty: {
                args: true,
                msg: "Debes ingresar el nombre del departamento"
            }
        }
    },
});


module.exports = Department;