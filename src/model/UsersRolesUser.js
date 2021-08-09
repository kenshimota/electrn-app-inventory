const {DataTypes } = require("sequelize");
const sequelize = require('../connection.js');

const UsersRolesUser = sequelize.define("users_roles_users", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    role_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
});

(async () => {
  await sequelize.sync();
})();

module.exports = UsersRolesUser;