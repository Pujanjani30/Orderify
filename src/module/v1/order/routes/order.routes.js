// conrrollers
const orderController = require('../controllers/order.controllers');

// middlewares
const { verifyToken } = require('../../../../middlewares/token');
const roleValidator = require('../../../../middlewares/role-validator');
const timeValidation = require('../../../../middlewares/time-validation');

const ordersRoutes = (app) => {
    app.get('/order', verifyToken, roleValidator(['admin']), orderController.orderAll);

    app.post('/order', verifyToken, timeValidation, orderController.orderAdd);

    app.put('/order', verifyToken, roleValidator(['admin']), orderController.orderUpdate);
}

module.exports = ordersRoutes;

