const adminRouter = require("./admin");
const clientRouter = require("./client");

const router = require("express").Router();

router.use("/administrator", adminRouter);
router.use("/client", clientRouter);

module.exports = router;
