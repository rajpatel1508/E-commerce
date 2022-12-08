const express = require("express");
const { requiresignin, userMiddleware } = require("../common-middleware");
const { addItemToCart, getCartItems } = require("../controllers/cart");
const router = express.Router();

//API to add item to cart
router.post('/user/cart/addtocart', requiresignin, userMiddleware, addItemToCart);
//API to get item of cart
router.post('/user/getCartItems', requiresignin, userMiddleware, getCartItems);

module.exports = router;