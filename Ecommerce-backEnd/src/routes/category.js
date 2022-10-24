const express = require("express");
const { requiresignin, adminMiddleware } = require("../common-middleware");
const { createCategory, getCategories } = require("../controllers/category");
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

//Function to create storage for files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname);
    }
})
//Assigning storage
const upload = multer({ storage: storage });
//API to create new category
router.post('/category/create', requiresignin, adminMiddleware, upload.single("categoryImage") , createCategory);
//API to get categories
router.get('/category/getcategory', getCategories);

module.exports = router;