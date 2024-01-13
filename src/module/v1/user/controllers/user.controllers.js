const userServices = require('../services/user.services');
const { successResponse, errorResponse } = require('../../../../helpers/http-response');

const userGet = async (req, res) => {
  try {
    const data = Object.assign({}, req.body, req.params, req.query, req.user);

    let response = await userServices.userGet(data);
    successResponse({ res, message: "User fetched successfully", response });
  } catch (err) {
    errorResponse(res, err);
  }
}

const userUpdate = async (req, res) => {
  try {
    const data = Object.assign({}, req.body, req.params, req.query, req.user);

    await userServices.userUpdate(data);
    successResponse({ res, message: "User updated successfully" });
  } catch (err) {
    errorResponse(res, err);
  }
}

module.exports = { userUpdate, userGet }