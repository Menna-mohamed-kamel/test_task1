const { Router } = require('express');
const eventrouter = Router();

const usercontroller = require('../controllers/user_controller');

userrouter.get('/', usercontroller.getAllUsers);
userrouter.get('/:id', usercontroller.getUserById);
userrouter.get('/event/:eventId/status/:eventStatus', usercontroller.getUsersForEventByStatus);
userRouter.post('/', usercontroller.addUser);
userRouter.put('/:id', usercontroller.editUserById);
userRouter.delete('/:id', usercontroller.deleteUser);


module.exports = {
    userrouter,
};