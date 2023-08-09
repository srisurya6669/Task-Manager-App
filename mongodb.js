const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

connectionURL = 'mongodb://127.0.0.1:27017'
dbName = "task-manager"

console.log("mongodb")
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) return console.log('unable to connect to DataBase')

    const db = client.db(dbName);

    // db.collection('users').insertOne({
    //     name: 'Surya',
    //     no: 26
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: "task 1",
    //         completed: true
    //     },
    //     {
    //         description: 'task2',
    //         completed: false
    //     },
    //     {
    //         description: 'task3',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) return console.log('unable to insert documents')
    //     console.log(result.ops)
    // })

})
