const express = require('express')
require('./db/mongoose.js')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('server under maintenance')
// })


app.use(express.json())
// routers
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log("server listening on port ", port)
})

