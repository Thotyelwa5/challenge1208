const Users = require('./user')
const Orders = require('./order')
const Books = require('./bookId')
const BookAuthors = require('./bookAuth')
//Export all objects
module.exports = {
    users: new Users(),
}
