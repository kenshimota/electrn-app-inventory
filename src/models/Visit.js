const {DataTypes } = require("sequelize");
const sequelize = require('../connection.js');

const Visit = sequelize.define("visits", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {            
            notNull: {
                arg: true,
                msg: "Debe ingresar la fecha de visita"
            },
            isDate: {
                arg: true,
                msg: "La fecha de visita no es valida"
            },
            notEmpty: {
                args: true,
                msg: "Debe ingresar la fecha de visita"
            }
        }
    },
    client_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "clients",
            key: "id"
        },
        validate: {            
            notNull: {
                arg: true,
                msg: "Debe ingresar un cliente"
            },
        }
    },
    reason_visit: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {            
            notNull: {
                arg: true,
                msg: "Debe especificar un motivo de visita valido"
            },
            notEmpty: {
                arg: true,
                msg: "Debe especificar el motivo de la visita del cliente"
            }
        }
    },
});

(async () => {
  await sequelize.sync();
})();

module.exports = Visit;