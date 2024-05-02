
const { default: mongoose } = require("mongoose");

const notificationSchema = new mongoose.Schema({
  // Information about the event
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event', // Reference the Event model
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
  },

  // Notification details
  recipient: {
    type: String, // Can be email, phone number, etc. based on your use case
    required: true,
  },
  channel: {
    type: String,
    enum: ['email', 'sms', 'push notification'], // Add other channels as needed
    required: true,
  },
  message: {
    type: String,
    required: true,
  },

  // Additional notification properties (optional)
  scheduledTime: {
    type: Date, // Time the notification is scheduled for delivery
  },
  deliveryStatus: {
    type: String,
    enum: ['pending', 'sent', 'failed'], // Track notification delivery status
  },
  deliveryAttemptCount: {
    type: Number,
    default: 0, // Track number of attempts to deliver the notification
  },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = { Notification, };
