const { Router } = require('express');
const scheduleRouter = Router();

const scheduleController = require('../controllers/schedule_controller');

scheduleRouter.get('/', scheduleController.getAllSchedules);
scheduleRouter.get('/:id', scheduleController.getScheduleById);
scheduleRouter.post('/', scheduleController.createSchedule);
scheduleRouter.put('/:id', scheduleController.updateScheduleById);
scheduleRouter.delete('/:id', scheduleController.deleteScheduleById);

module.exports = {
    scheduleRouter,
};