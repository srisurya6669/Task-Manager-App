const { MongoClient, ObjectId } = require('mongodb')


connectionURL = 'mongodb://127.0.0.1:27017'
dbName = "task-manager"


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) return console.log('unable to connect to DataBase')

    const db = client.db(dbName);

    // db.collection('users').insertOne({
    //     name: 'Surya',
    //     no: 26
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         name: 'rohit',
    //         no: 75
    //     },
    //     {
    //         name: 'yash',
    //         no: 80
    //     },

    // ], (error, result) => {
    //     if (error) return console.log('unable to insert documents')
    //     console.log(result.ops)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((e, r) => {
    //     console.log(r)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false,
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((e) => {
    //     console.log(e)
    // })

    // db.collection('tasks').deleteMany({ completed: true })
})
