// controllers
const productController = require('../controllers/product.controllers');

// middlewares
const { verifyToken } = require('../../../../middlewares/token');
const roleValidator = require('../../../../middlewares/role-validator');
const validator = require('../../../../middlewares/validator');

// validators
const { productGetSchema, productAddSchema, productUpdateSchema } = require('../validator/index');

const productRoutes = async (app) => {
  app.post('/product/pagging', verifyToken, validator(productGetSchema), productController.productGet);
  app.post('/product', verifyToken, roleValidator(['admin']), validator(productAddSchema), productController.productAdd);

  app.put('/product', verifyToken, roleValidator(['admin']), validator(productUpdateSchema), productController.productUpdate);

  app.delete('/product', verifyToken, roleValidator(['admin']), productController.productDelete);
}

module.exports = productRoutes;