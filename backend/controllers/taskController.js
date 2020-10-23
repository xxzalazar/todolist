const Task = require('../models/Task')

const taskController = {
    newTask: async(req,res)=>{
        const add = new Task({...req.body})
        add
        .save()
        .then(resp => res.json({ success: true, resp }))
        .catch(error => res.json({ success: false, error }))
    },
    getTask: async(req,res)=>{
        const tasks = await Task.find({ ...req.params })
        res.json({success: true, tasks})
    },
    deleteTask: (req,res)=>{
        Task.findByIdAndDelete(req.params.id)
        .then(resp => res.json({ success: true, resp }))
		.catch(error => res.json({ success: false, error }))
    },
    editedTask: (req,res)=>{
        const { taskId, task } = req.body
		Task.findByIdAndUpdate(taskId, { task }, { new: true })
		.then(task => res.json({ success: true, task }))
		.catch(error => res.json({ success: false, error }))
    }
}
module.exports = taskController