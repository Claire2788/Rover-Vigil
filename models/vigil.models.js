const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vigilSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    s1q1: {
        type: String,
        required: true,
    },
    s1q2: {
        type: String,
        required: true,
    },
    s1q3: {
        type: String,
        required: true,
    },
    s2q1: {
        type: String,
        required: true,
    },
    s2q2: {
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