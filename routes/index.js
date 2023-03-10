const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const cartRouter = require("./cartRouter");
const searchRouter = require("./searchRouter");
const orderRouter = require("./orderRouter");

router.use("/users", userRouter.router);
router.use("/products", productRouter.router);
router.use("/carts", cartRouter.router);
router.use("/search", searchRouter.router);
router.use("/orders", orderRouter.router);

module.exports = router;
