const cartServices = require('../services/cart.services');
const { errorResponse, successResponse } = require('../../../../helpers/http-response');

const cartGet = async (req, res) => {
    try {
        const data = Object.assign({}, req.body, req.params, req.query, req.user);

        const response = await cartServices.cartGet(data);
        successResponse({ res, message: 'Success', response });
    } catch (err) {
        errorResponse(res, err);
    }
}

const cartAdd = async (req, res) => {
    try {
        const data = Object.assign({}, req.body, req.params, req.query, req.user);

        await cartServices.cartAdd(data);
        successResponse({ res, message: 'Success' });
    } catch (err) {
        errorResponse(res, err);
    }
}

const cartDelete = async (req, res) => {
    try {
        const data = Object.assign({}, req.body, req.params, req.query, req.user);

        const response = await cartServices.cartDelete(data);
        successResponse({ res, message: 'Success', response });
    } catch (err) {
        errorResponse(res, err);
    }
}


module.exports = { cartGet, cartAdd, cartDelete };