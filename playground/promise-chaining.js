require('../src/db/mongoose')
const { resourceLimits } = require('worker_threads')
const Task = require('../src/models/task')
const User = require('../src/models/user')

// Task.findByIdAndDelete('64d66a6edc96f65298aa58f6').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((count) => {
//     console.log(count)
// }).catch((err) => {
//     console.log(err)
// })

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate('64d64cda99d08c580754c146', { age })
//     const count = await User.countDocuments({ age })
//     return count
// }

// updateAgeAndCount('64d64cda99d08c580754c146', 0).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}


deleteTaskAndCount('64d631e948074e4ffe37df6b').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})