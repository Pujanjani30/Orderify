const services = require('../services/order-history.services');
const { successResponse, errorResponse } = require('../../../../helpers/http-response');

const orderHistoryGet = async (req, res) => {
  try {
    const data = Object.assign({}, req.body, req.params, req.query, req.user);

    const response = await services.orderHistoryGet(data);
    successResponse({ res, response, message: 'Success' });
  } catch (err) {
    errorResponse(res, err);
  }
}

module.exports = { orderHistoryGet };