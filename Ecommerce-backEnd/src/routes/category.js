const express = require("express");
const { requiresignin, adminMiddleware } = require("../common-middleware");
const { createCategory, getCategories } = require("../controllers/category");
const router = express.Router();

//API to create new category
router.post('/category/create', requiresignin, adminMiddleware, createCategory);
//API to get categories
router.get('/category/getcategory', getCategories);

module.exports = router;