// Import User Model
const User = require('../models/users.models');

// Import JWT packagges 
const jwt = require('jsonwebtoken');

const expressJwt = require('express-jwt');




// Import Node-Fetch
const fetch = require('node-fetch');

/**
 * @function: resgisterUser
 * @description: Create new instance of user
 * 
 * @param {*} req user information from body
 * @param {*} res with user information to client
 */
const registerUser = (req, res) => {
    const { name, email, password } = req.body;

    User.findOne({ email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                message: 'User already exists'
            })
        }

        // Create new User
        const newUser = new User({ name, email, password });
        newUser.save();

        return res.status(201).json({
            message: 'User created succesfully! Please signin',
            newUser
        });
    })
};


/**
 * @function: resgisterUser
 * @description: Serve created User to client and sign a JWT Token 
 * 
 * @param {*} req user information from body
 * @param {*} res with user information to client
 */
const loginUser = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exsit. Please signup'
            })
        }
        // authenticate (validate password - coming from User model)
        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: 'Email and password does not match'
            })
        }

        // generate a token - send it to client
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        const { _id, name, email, role, todos } = user;

        return res.json({
            token,
            user: { _id, name, email, role, todos }
        });

    })
};

/**
 * @function: requireSignin
 * @description: Pass this middlewear to routes if we want them protected
 * 
 * By passing this middlewear to endpoints, we have access to the user
 * so we can simply say req.user, and we should be able to retrive the
 * current logged in user -- see how it is passed on the endpoints
 * with the Todo routes & controllers
 * 
 * @example: router.get('/todos', requireSignin, showTodos)
 */
const requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'] 
})

/**
 * @function: adminMiddleware
 * @description: Pass this middlewear to routes if we want them ADMIN protected
 * 
 * By passing this middlewear along with 'requireSignin' to endpoints, we should
 * be able to check if the user has a role of 'Admin'. 
 * 
 * We can restrict access to certain endpoints if you want them admin protected
 * 
 * @example: router.get('/todos', requireSignin, adminMiddleware,showTodos)
 */
const adminMiddleware = (req, res, next) => {
    User.findById({ _id: req.user._id }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            })
        }

        if (user.role !== "admin") {
            return res.status(400).json({
                error: "Admin resource. Access denied"
            })
        }

        req.profile = user;
        next()
    })
}


module.exports = {
    registerUser,
    loginUser,
    requireSignin,
    adminMiddleware

};