
const { Router } = require('express');
const notificationRouter = Router();

const notificationController = require('../controllers/notification_controller');

// Routes for notification management:

notificationRouter.get('/', notificationController.getAllNotifications);  // Get all notifications
notificationRouter.get('/:id', notificationController.getNotificationById);  // Get notification by ID
notificationRouter.post('/', notificationController.addNotification);  // Add a new notification
notificationRouter.put('/:id', notificationController.updateNotificationById);  // Update a notification
notificationRouter.delete('/:id', notificationController.deleteNotification);  // Delete a notification



module.exports = {
  notificationRouter,
};
