// controllers
const userController = require('../controllers/user.controllers');

// middlewares
const { verifyToken } = require('../../../../middlewares/token');
const userUpdateSchema = require('../validator/user-update.validator');
const validator = require('../../../../middlewares/validator');

const userRoutes = async (app) => {
  app.get('/user', verifyToken, userController.userGet);

  app.put('/user', verifyToken, validator(userUpdateSchema), userController.userUpdate);
}

module.exports = userRoutes;