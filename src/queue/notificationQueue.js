const { Queue } = require('bullmq');
const { Redis } = require('ioredis');

const connection = new Redis();

const notificationQueue = new Queue('notifications', {
  connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000,
    }
  }
});

module.exports = notificationQueue;
