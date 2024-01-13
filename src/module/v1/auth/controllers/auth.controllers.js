const authServices = require('../services/auth.services');
const { successResponse, errorResponse } = require('../../../../helpers/http-response');

const register = async (req, res) => {
  try {
    const data = Object.assign({}, req.body, req.params, req.query, req.user);

    let response = await authServices.register(data);
    successResponse({
      res, message: 'Registered successfully', response: response.userData,
      token: response.encodedData
    });
  } catch (err) {
    errorResponse(res, err);
  }
}

const login = async (req, res) => {
  try {
    const data = Object.assign({}, req.body, req.params, req.query, req.user);
    let response = await authServices.login(data);

    successResponse({
      res, response: response.userData,
      message: "Logged in successfully", token: response.encodedData
    });
  } catch (err) {
    errorResponse(res, err);
  }
}

module.exports = { register, login };

/* const resetPassLinkMailer = async(req, res) => {
    try{
        if(!req.body) return errorResponse({res, message:"Request body is required",status:400});
        let result = await authServices.resetPassLinkMailer(req.body);
        if(result == "NotFound") return errorResponse({res, message:"User does not exist", status:404});
        successResponse({res, message:"Success"});
    }catch(error){
        console.log(error);
        errorResponse({res, message:'Internal server error', status:500});
    }
}

const resetPass = async(req, res) => {
    try{
        if(!req.body) return errorResponse({res, message:"Request body is required",status:400});
        const result = await authServices.resetPass({ ...req.body, token: req.params.token});
        if(result == "LinkExpired") return errorResponse({res, message:"Link expired", status:400});
        successResponse({res, message:"Success"});
    }catch(error){
        console.log(error);
        errorResponse({res, message:'Internal server error', status:500});
    }
} */
