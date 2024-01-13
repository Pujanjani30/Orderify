const productsServices = require('../services/product.services');
const { successResponse, errorResponse } = require('../../../../helpers/http-response');

const productGet = async (req, res) => {
  try {
    const data = Object.assign({}, req.body, req.params, req.query, req.user);

    let response = await productsServices.productGet(data);
    successResponse({ res, message: 'Product fetched successfully', response });

  } catch (err) {
    errorResponse(res, err);
  }
}

const productAdd = async (req, res) => {
  try {
    const data = Object.assign({}, req.body, req.params, req.query, req.user);

    const response = await productsServices.productAdd(data);
    successResponse({ res, message: "Product added successfully", response });

  } catch (err) {
    errorResponse(res, err);
  }
}

const productUpdate = async (req, res) => {
  try {
    const data = Object.assign({}, req.body, req.params, req.query, req.user);

    await productsServices.productUpdate(data);
    successResponse({ res, message: "Product updated successfully" });

  } catch (error) {
    errorResponse(res, err);
  }
}

const productDelete = async (req, res) => {
  try {
    const data = Object.assign({}, req.body, req.params, req.query, req.user);

    await productsServices.productDelete(data);
    successResponse({ res, message: "Product deleted successfully" });

  } catch (error) {
    errorResponse(res, err);
  }
}

module.exports = { productGet, productAdd, productUpdate, productDelete };