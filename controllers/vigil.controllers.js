// Import Models
const Todo = require('../models/todos.models');
const Vigil = require('../models/vigil.models');
const User = require('../models/users.models');

/**
 * @function: viewTodos
 * @description: View todos from the logged in user 
 * @access User 
 * 
 * @param {*} req user information from body
 * @param {*} res with user information to client
 */
const viewVigils = (req, res) => {
    const loggedInUser = req.user._id;

    User.findById(loggedInUser).exec((err, user) => {
        if (err) {
            return res.status(400).json({
                error: 'Failed to fetch vigils'
            })
        }

        return res.json({
            vigils: user.vigils
        })
    })
}

/**
 * @function: createTodo
 * @description: Create a todo from the logged in user
 * @access User 
 * 
 * @param {*} req user information from body
 * @param {*} res with user information to client
 */
const createVigil = (req, res) => {
    const user = req.user._id;
    let vigil = new Vigil({ 
        user, vigil: req.body.vigil });

    // Save new todo
    vigil.save();

    /**
     * Find the logged in user and the the todo 
     * to the users "todos" arrary with .push method  
     */
    User.findById(user).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Failed to add vigil'
            })
        }

        // Data represents a User object
        data.vigils.push(vigil);
        // Save the updated user with the new todo
        data.save();

        return res.status(200).json({
            message: 'Vigil added!',
            data
        })
    })
}


/**
 * @function: deleteTodo
 * @description: Delete a todo from the logged in user
 * @access User 
 * 
 * @param {*} req user information from body
 * @param {*} res with user information to client
 */
const deleteVigil = (req, res) => {
    const { _id } = req.params;

    Todo.findByIdAndDelete(_id).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Failed to delete todo'
            })
        }

        return res.status(201).json({
            message: 'Todo deleted!'
        })
    })
}


// Export Controllers
module.exports = {
    viewVigils,
    createVigil,
    deleteVigil
}