const express = require('express');
const sequelize = require('./config/database');
const Notification = require('./models/notification');
const routes = require('./routes/notifications');

const app = express();

app.use(express.json());
app.use('/', routes);

(async () => {
  await sequelize.sync();
  console.log('✅ Database synced');
})();

module.exports = app;
