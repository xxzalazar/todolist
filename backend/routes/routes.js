const express = require('express')
const routes = express.Router()
const userController = require('../controllers/userController')
const taskController = require('../controllers/taskController')
const validator = require('../validator')

routes.route('/user')
.get(userController.loginUser)
.post(validator.validateNewUser, userController.newUser)

routes.route('/task')
.get(taskController.getTask)
.post(taskController.newTask)
.put(taskController.editedTask)
.delete(taskController.deleteTask)

module.exports = routes