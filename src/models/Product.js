const {DataTypes } = require("sequelize");
const sequelize = require('../connection.js');

const Product = sequelize.define("products", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    department_id: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
            model: "departments",
            key: "id"
        },
        validate: {            
            notNull: {
                args: true,
                msg: "Debes ingresar un departamento valido"
            }
        }
    },
    brand: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Debes un ingresar la marca del producto"
            },
            notEmpty: {
                args: true,
                msg: "La marca del producto no es valida"
            }
        }
    },
    model: {
        type: DataTypes.TEXT,
        allowNull:false,
        validate: {
            notNull: {
                args: true,
                msg: "Debes ingresar el modelo del producto"
            },
            notEmpty: {
                args: true,
                msg: "El modelo del producto no es valido"
            }
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: {
                args: true,
                msg: "Solo es permitido usar numeros para la existencia"
            },
            notEmpty: {
                args: true,
                msg: "Debe ingresar una existencia valida"
            },
            notNull: {
                args: true,
                msg: "Debes ingresar la existencia del producto"
            }
        }
    }
});


module.exports = Product;