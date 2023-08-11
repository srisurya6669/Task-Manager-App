const mongoose = require('mongoose')
const validator = require('validator')


const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

const Task = mongoose.model('tasks', taskSchema)

module.exports = Task 