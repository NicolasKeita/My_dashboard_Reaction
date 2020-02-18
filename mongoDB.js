const mongoose = require('mongoose');

const schema  = mongoose.Schema({
    name : String,
    email : String,
    password : String
})

module.exports = mongoose.model('user', schema);
