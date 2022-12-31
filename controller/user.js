const { comparePassword, createAccessToken } = require("../helper/helper");
const { User } = require("../models/index");

class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const dataUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!email) {
        throw { name: "Email is required" };
      }

      if (!password) {
        throw { name: "Password is required" };
      }

      if (!dataUser) {
        throw { name: "Invalid email/password" };
      }

      if (!comparePassword(password, dataUser.password)) {
        throw { name: "Invalid email/password" };
      }

      const payload = {
        id: dataUser.id,
      };

      const access_token = createAccessToken(payload);
      res.status(200).json({
        access_token,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
