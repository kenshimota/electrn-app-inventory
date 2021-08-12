const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'data/data.db'
});


(async () => {
  await sequelize.sync();
})();


module.exports = sequelize;



