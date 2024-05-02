const { Notification } = require('../models/notification'); // notification model

const getAllNotifications = async (req, res) => {
  try {
    const allNotifications = await Notification.find({});
    res.status(200).send(allNotifications);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findOne({ _id: req.params.id });
    res.status(200).send(notification);
  } catch (error) {
    res.status(400).send(error);
  }
};

const addNotification = async (req, res) => {
  try {
    const newNotification = await Notification.create(req.body);
    res.status(200).send(newNotification);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findOne({ _id: req.params.id });
    if (!notification) {
      return res.status(404).send('Notification not found');
    }

    // Update relevant notification fields
    if (req.body.eventId) {
      notification.eventId = req.body.eventId;
    }
    if (req.body.eventName) {
      notification.eventName = req.body.eventName;
    }
    if (req.body.eventDescription) {
      notification.eventDescription = req.body.eventDescription;
    }
    if (req.body.recipient) {
      notification.recipient = req.body.recipient;
    }
    if (req.body.channel) {
      notification.channel = req.body.channel;
    }
    if (req.body.message) {
      notification.message = req.body.message;
    }
    if (req.body.scheduledTime) {
      notification.scheduledTime = req.body.scheduledTime;
    }
    if (req.body.deliveryStatus) {
      notification.deliveryStatus = req.body.deliveryStatus;
    }
    if (req.body.deliveryAttemptCount) {
      notification.deliveryAttemptCount = req.body.deliveryAttemptCount;
    }

    await notification.save();
    res.status(200).send(notification);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteNotification = async (req, res) => {
  try {
    await Notification.deleteOne({ _id: req.params.id });
    res.status(200).send('Notification deleted successfully');
  } catch (error) {
    res.status(400).send(error);
  }
};




module.exports = {
  getAllNotifications,
  getNotificationById,
  addNotification,
  updateNotificationById,
  deleteNotification,
};

