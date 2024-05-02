const { Router } = require('express');
const userrouter = Router();

const usercontroller = require('../controllers/user_controller');

userrouter.get('/', usercontroller.getAllUsers);
userrouter.get('/:id', usercontroller.getUserById);
userrouter.get('/event/:eventId/status/:eventStatus', usercontroller.getUsersForEventByStatus);
userrouter.post('/', usercontroller.addUser);
userrouter.put('/:id', usercontroller.editUserById);
userrouter.delete('/:id', usercontroller.deleteUser);


module.exports = {
    userrouter,
};