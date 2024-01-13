const Products = require("../../../../models/product.model");

const productGet = async (data) => {
  let conditions = {
    prd_name: { $regex: new RegExp(data.search, "i") },
  }

  if (data.role == "user") conditions.prd_is_visible = true;

  let products = await Products.find(conditions)
    .select('prd_name prd_price prd_img prd_is_visible')
    .skip(data.page * data.limit - data.limit).limit(data.limit);

  let total = await Products.countDocuments(conditions);
  count = Math.ceil(total / data.limit)

  return { products: products, total_page: count, total_products: total };
}

const productAdd = async (data) => {
  let check = await Products.findOne({ prd_name: data.prd_name, prd_price: data.prd_price });
  if (check)
    throw new Error("ALREADY_EXISTS");

  return await Products.create(data);
}

const productUpdate = async (data) => {
  let count = await Products.countDocuments({ _id: data.prd_id });
  if (count == 0)
    throw new Error("DATA_NOT_FOUND");

  let check = await Products.countDocuments({ _id: { $ne: data.prd_id }, prd_name: data.prd_name, prd_price: data.prd_price });
  if (check)
    throw new Error("ALREADY_EXISTS");

  await Products.updateOne({ _id: data.prd_id }, { ...data, prd_id: undefined });

}

const productDelete = async (data) => {
  await Products.updateMany({ _id: { $in: data.prd_ids } }, { $set: { prd_is_visible: false } })
}

module.exports = { productGet, productAdd, productUpdate, productDelete };

