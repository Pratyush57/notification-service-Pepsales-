const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './notifications.db',
  logging: false
});

module.exports = sequelize;
