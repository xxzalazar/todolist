const { timeStamp } = require('console')
const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    title:{ type: String, required: true, default:['new task']},
    task:{ type: String, required: true},
    type:{ type: String},
    status:{type: String},
    user:{ type: moongose.Schema.ObjectId, ref:'user'},
}, timeStamp)
const Task = mongoose.model('task', taskSchema)
module.exports = Task