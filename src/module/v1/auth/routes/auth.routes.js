// controllers
const authController = require('../controllers/auth.controllers');

// middlewares
const validator = require('../../../../middlewares/validator');

// validators
const { loginSchema, registerSchema } = require('../validator');

const registerRoutes = async (app) => {
  app.post('/register', validator(registerSchema), authController.register);

  app.post('/login', validator(loginSchema), authController.login);

  /* app.post('/reset-pass', authController.resetPassLinkMailer);
  
  app.post('/reset-pass/:token', authController.resetPass) */
}
module.exports = registerRoutes;