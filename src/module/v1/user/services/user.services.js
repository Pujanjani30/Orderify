const mongoose = require('mongoose');
const Users = require('../../../../models/user.model')

const userGet = async (data) => {
  const user = await Users.findOne({ _id: data.id }, { user_pass: 0, __v: 0 });
  if (!user) throw Error("DATA_NOT_FOUND");

  return user;
}

const userUpdate = async (data) => {
  await Users.updateOne({ _id: data.id }, data);
  return;
}

module.exports = { userUpdate, userGet }