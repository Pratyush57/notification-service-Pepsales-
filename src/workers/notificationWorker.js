const { Worker } = require('bullmq');
const { Redis } = require('ioredis');
const Notification = require('../models/notification');
const { sendEmail, sendSMS, sendInApp } = require('../utils/senders');

const connection = new Redis();

const worker = new Worker('notifications', async job => {
  const { id } = job.data;
  const notification = await Notification.findByPk(id);

  try {
    if (notification.type === 'email') sendEmail(notification.message);
    else if (notification.type === 'sms') sendSMS(notification.message);
    else if (notification.type === 'in-app') sendInApp(notification.message);

    notification.status = 'sent';
  } catch (err) {
    notification.status = 'failed';
    throw err;
  }

  await notification.save();
}, { connection });

console.log('🎯 Notification worker is running...');
