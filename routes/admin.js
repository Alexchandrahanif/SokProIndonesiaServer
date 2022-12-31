const Controller = require("../controller/user");

const adminRouter = require("express").Router();

adminRouter.post("/login", Controller);

module.exports = adminRouter;
