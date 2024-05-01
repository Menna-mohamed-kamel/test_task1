const User = require('../models/user');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};


const editUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(404).send('User not found');
    }
    
    if (req.body.name) {
      user.name = req.body.name;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    if (req.body.age) {
      user.age = req.body.age;
    }
    if (req.body.eventId) {
      user.eventId = req.body.eventId;
    }
    if (req.body.eventStatus) {
      user.eventStatus = req.body.eventStatus;
    }
    if (req.body.accountStatus) {
      user.accountStatus = req.body.accountStatus;
    }
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).send('User deleted successfully');
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUsersForEventByStatus = async (req, res) => {
    const eventId = req.params.eventId;
    const eventStatus = req.params.eventStatus;
  
    try {
      const users = await User.find({ eventId: eventId, eventStatus: eventStatus });
      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(error);
    }
  };

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  editUserById,
  deleteUser,
  getUsersForEventByStatus,
};
