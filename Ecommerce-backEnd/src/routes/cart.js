const express = require("express");
const { requiresignin, userMiddleware } = require("../common-middleware");
const { addItemToCart } = require("../controllers/cart");
const router = express.Router();

//API to create new category
router.post('/user/cart/add', requiresignin, userMiddleware, addItemToCart);

module.exports = router;