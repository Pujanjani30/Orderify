// controllers
const orderHistorycontroller = require('../controllers/order-history.controllers');

// middlewares
const { verifyToken } = require('../../../../middlewares/token');
const roleValidator = require('../../../../middlewares/role-validator');
const validator = require('../../../../middlewares/validator');

// validators
const orderHistorySchema = require('../validators/order-history.validator');

const orderHistoryRoutes = (app) => {
    app.post('/order-history', verifyToken, roleValidator(['user']), validator(orderHistorySchema), orderHistorycontroller.orderHistoryGet);
}

module.exports = orderHistoryRoutes;