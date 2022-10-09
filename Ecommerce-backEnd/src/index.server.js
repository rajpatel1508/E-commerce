//module import
const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require('mongoose');
// const bodyParser = require('body-parser')
//Routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')

//Environment variable config
env.config();

//Mongoose connection
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
    console.log("Database connected");
});

// app.use(bodyParser.urlencoded({ extended: true, }))
//Middleware to parse json data
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Prefixing routes with /api
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

//Server port config
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});