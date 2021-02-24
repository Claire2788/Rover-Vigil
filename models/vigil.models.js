const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vigilSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question1: {
        type: String,
        required: true,
    },
    question2: {
        type: String,
        required: true,
    },
    question3: {
        type: String,
        required: true,
    },
    question4: {
        type: String,
        required: true,
    },
    question5: {
        type: String,
        required: true,
    },
    question6: {
        type: String,
        required: true,
    }
}, { timestamps: true })


// Auto Populate Users
const autoPopulateUser = function(next) {
    this.populate('User', '_id name email user');
    next()
}

vigilSchema.pre('findOne', autoPopulateUser);
vigilSchema.pre('findById', autoPopulateUser);
vigilSchema.pre('find', autoPopulateUser);


module.exports = mongoose.model('Vigil', vigilSchema);