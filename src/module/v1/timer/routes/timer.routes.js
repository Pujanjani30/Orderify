// controllers
const timerController = require('../controllers/timer.controllers');

// middlewares
const roleValidator = require('../../../../middlewares/role-validator');
const { verifyToken } = require('../../../../middlewares/token');

const timerRoutes = (app) => {
  app.get('/timer', verifyToken, timerController.timerGet);

  app.put('/timer', verifyToken, roleValidator(['admin']), timerController.timerSet);
}

module.exports = timerRoutes;
