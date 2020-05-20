const Project = require('./../models/project');

var get = (street) => {
    return Project.find({street: new RegExp(street, 'i')})
}

module.exports = {
    get
}