const {DataTypes } = require("sequelize");
const sequelize = require('../connection.js');

const Role = sequelize.define("roles", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

(async () => {
  await sequelize.sync();
  // Code here
})();

module.exports = Role;