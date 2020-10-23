const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, trim: true, required: true},
    name: {type: String, required: true},
    mail: {type: String, required: true},
    rol: { type: String},
    picture: { type: String}
})
const User = mongoose.model('user', userSchema)
module.exports = User