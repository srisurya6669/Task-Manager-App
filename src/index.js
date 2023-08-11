const express = require('express')
require('./db/mongoose.js')
const User = require('./models/user.js')
const Task = require('./models/task.js')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// users operations 

// create user 
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

// read all users 
app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.status(200).send(users)
    }).catch((err) => {
        res.status(500).send()
    })
})

// read single user  
app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.status(200).send(user)
    }).catch((e) => {
        res.status(500).send()
    })
})


// Tasks operations

// create Task 
app.post('/tasks', (req, res) => {
    const user = new Task(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

// read all tasks
app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.status(200).send(tasks)
    }).catch((e) => {
        res.status(400).send()
    })
})

// read single task
app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.status(200).send(task)
    }).catch((e) => {
        res.status(400).send()
    })
})






app.listen(port, () => {
    console.log("server listening on port ", port)
})