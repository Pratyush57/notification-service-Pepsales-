const express = require('express');
const Notification = require('../models/notification');
const notificationQueue = require('../queue/notificationQueue');

const router = express.Router();

router.post('/notifications', async (req, res) => {
  const { userId, type, message } = req.body;

  try {
    const notif = await Notification.create({ userId, type, message });

    await notificationQueue.add('sendNotification', { id: notif.id });

    res.status(202).json({ message: 'Notification queued' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send notification' });
  }
});

router.get('/users/:id/notifications', async (req, res) => {
  const userId = req.params.id;
  const notifs = await Notification.findAll({ where: { userId } });

  res.json(notifs);
});

module.exports = router;
