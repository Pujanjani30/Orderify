const orderService = require('../services/order.services');
const { successResponse, errorResponse } = require('../../../../helpers/http-response');

const orderAll = async (req, res) => {
    try {
        const response = await orderService.orderAll();
        successResponse({ res, message: 'Success', response });
    }
    catch (err) {
        errorResponse(res, err);
    }
}

const orderAdd = async (req, res) => {
    try {
        const data = Object.assign({}, req.body, req.params, req.query, req.user);

        await orderService.orderAdd(data);
        successResponse({ res, message: 'Success' });
    }
    catch (err) {
        errorResponse(res, err);
    }
}
const orderUpdate = async (req, res) => {
    try {
        const data = Object.assign({}, req.body, req.params, req.query, req.user);

        let response = await orderService.orderUpdate(data);
        successResponse({ res, message: 'Success updated', response });
    }
    catch (err) {
        errorResponse(res, err);
    }
}

module.exports = { orderAll, orderAdd, orderUpdate }