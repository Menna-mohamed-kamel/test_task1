# Event management APIs
The Event Management System is a RESTful API designed to handle various aspects of event management including events, users, schedules, and notifications. It provides endpoints to perform CRUD operations on these entities, allowing users to manage events, schedule tasks, send notifications, and manage user data.

Introduction
The Event Management System is built to streamline event-related tasks and communication within an organization or application. It leverages MongoDB as its database and provides a scalable and efficient solution for managing events, users, schedules, and notifications.

Components
Controllers
Event Controller: Handles operations related to events such as creating, updating, deleting, and retrieving events.
User Controller: Manages user data including user profiles, event participation, and account status.
Schedule Controller: Facilitates scheduling tasks or events, allowing users to manage their schedules efficiently.
Notification Controller: Handles the sending and management of notifications to users regarding events, updates, or reminders.

Models
Event: Represents an event with attributes such as name, count, duration, and date.
User: Represents a user with attributes such as name, email, age, and event participation status.
Schedule: Represents a scheduled task or event with attributes such as date, time, description, and associated user or event.
Notification: Represents a notification message with attributes such as recipient, message content, delivery status, and scheduled delivery time.
Routers
Each controller is associated with a router that defines the API endpoints and routes requests to the corresponding controller methods.

MongoDB
The system utilizes MongoDB as its database management system, providing a scalable and flexible solution for storing and querying data.

Docker
A Dockerfile is included in the project, allowing for easy containerization and deployment of the Event Management System in Docker environments.

Usage
Once the system is running, i can interact with it using API requests sent to the specified endpoints. Refer to the API documentation or explore the routers and controllers for available endpoints and their functionalities.