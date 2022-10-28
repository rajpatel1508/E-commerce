const jwt = require('jsonwebtoken');

//Middleware Function for verification
exports.requiresignin = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
    }
    else {
        return res.status(400).json({ message: 'Authorization required' });
    }
    next();
}

//Middleware to check if user role is 'user'
exports.userMiddleware = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(400).json({ message: 'User Access Denied' });
    }
    next();
}

//Middleware to check if user role is 'admin'
exports.adminMiddleware = (req, res, next) => {
    console.log(req.headers);
    if (req.user.role !== 'admin') {
        return res.status(400).json({ message: 'Admin Access Denied' });
    }
    next();
}