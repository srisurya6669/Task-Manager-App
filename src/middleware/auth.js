const jwt = require('jsonwebtoken')
const User = require('../models/user')


const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const { _id } = jwt.verify(token, 'thisissurya')
        const user = await User.findOne({ _id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.user = user
        next()
    }
    catch (e) {
        console.log(e)
    }
}
module.exports = auth