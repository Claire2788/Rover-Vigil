const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vigilSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    section1q1: {
        type: String,
        required: true,
    },
    section1q2: {
        type: String,
        required: true,
    },
    section1q3: {
        type: String,
        required: true,
    },
    section1q4: {
        type: String,
        required: true,
    },
    section2q1: {
        type: String,
        required: true,
    },
    section2q2: {
        type: String,
        required: true,
    },
    section2q3: {
        type: String,
        required: true,
    },
    section2q4: {
        type: String,
        required: true,
    },
    section3q1: {
        type: String,
        required: true,
    },
    section3q2: {
        type: String,
        required: true,
    },
    section3q3: {
        type: String,
        required: true,
    },
    section3q4: {
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