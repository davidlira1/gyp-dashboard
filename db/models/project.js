const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    state: {
        type: Boolean,
        required: true
    },
    companies: {
        type: Array,
        required: true
    }
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;