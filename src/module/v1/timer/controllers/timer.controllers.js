const timerServices = require('../services/timer.services');
const { successResponse, errorResponse } = require('../../../../helpers/http-response');

const timerGet = async (req, res) => {
   try {
      const response = await timerServices.timerGet();
      successResponse({ res, message: 'Success', response });
   } catch (err) {
      errorResponse(res, err);
   }
}

const timerSet = async (req, res) => {
   try {
      const data = Object.assign({}, req.body, req.params, req.query, req.user);

      const response = await timerServices.timerSet(data);
      successResponse({ res, message: 'Updated successfully', response });
   } catch (err) {
      errorResponse(res, err);
   }
}

module.exports = { timerGet, timerSet }