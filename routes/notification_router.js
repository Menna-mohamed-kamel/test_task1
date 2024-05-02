const { Router } = require('express');
const notificationRouter = Router();

const notificationController = require('../controllers/notification_controller');

notificationRouter.get('/', notificationController.getAllNotifications);
notificationRouter.get('/:id', notificationController.getNotificationById);
notificationRouter.post('/', notificationController.createNotification);
notificationRouter.put('/:id', notificationController.updateNotificationById);
notificationRouter.delete('/:id', notificationController.deleteNotificationById);

module.exports = {
    notificationRouter,
};
