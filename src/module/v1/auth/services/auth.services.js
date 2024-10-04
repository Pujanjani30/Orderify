// config
require('dotenv').config();

// models
const Users = require("../../../../models/user.model");

// middlewares
const { createToken } = require("../../../../middlewares/token");

// common
const { hashPassword, comparePassword } = require("../../../../common/hash-password");
// const mailer = require("../../../../common/mailer");
// const {gererateLink, decryptLink} = require("../../../../common/resetpasslink");

const login = async (data) => {
  let user = await Users.findOne({ user_email: data.user_email });

  if (!user)
    throw new Error("USER_NOT_EXISTS");

  let password = await comparePassword(data.user_pass, user.user_pass);
  if (!password)
    throw new Error("INVALID_CREDENTIALS");

  let userData = { ...user._doc, user_pass: undefined };
  let encodedData = createToken({ id: user._id, role: user.user_role });

  return { userData, encodedData };
}

const register = async (data) => {
  let exists = await Users.findOne({ user_email: data.user_email });
  if (exists)
    throw new Error("ALREADY_EXISTS")

  await hashPassword(data);
  const user = await Users.create(data);

  let userData = { ...user._doc, user_pass: undefined };
  let encodedData = createToken({ id: user._id, role: user.user_role });

  return { userData, encodedData };
}

module.exports = { login, register };

/* const resetPassLinkMailer = async (data) => {
        let user = await Users.findOne({ user_email: data.user_email });
        if (!user) return "NotFound";
        let link = await gererateLink({...data, iat: Date.now(), exp: Date.now() + 600000});
        mailer(user.user_email, link);
}

const resetPass = async (data) => {
        const decodedData = await decryptLink(data.token);
        console.log(decodedData);
        if(Date.now() > decodedData.exp) return "LinkExpired";
        await hashPassword(data);
        await Users.findOneAndUpdate({user_email: decodedData.user_email}, {user_pass: data.user_pass});
}
 */
