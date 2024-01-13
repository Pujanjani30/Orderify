// controllers
const cartController = require('../controllers/cart.controllers');

// middlewares
const { verifyToken } = require('../../../../middlewares/token');
const validator = require('../../../../middlewares/validator');
const roleValidator = require('../../../../middlewares/role-validator');

// validators
const { cartAddSchema, cartDelSchema } = require('../validator');

const cartRoutes = (app) => {

    app.get('/cart', verifyToken, roleValidator(['user']), cartController.cartGet);

    app.post('/cart', verifyToken, roleValidator(['user']), validator(cartAddSchema), cartController.cartAdd);

    app.delete('/cart', verifyToken, roleValidator(['user']), validator(cartDelSchema), cartController.cartDelete);
}

module.exports = cartRoutes;