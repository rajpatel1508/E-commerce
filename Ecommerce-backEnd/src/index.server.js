//module import
const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//Routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

//Environment variable config
env.config();

//Mongoose connection
mongoose.connect(process.env.MONGO).then(()=> {
    console.log("Database connected");
});

//Middleware to parse json data
app.use(bodyParser.json());

//Prefixing routes with /api
app.use('/api', authRoutes);
app.use('/api', adminRoutes);

//Server port config
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});