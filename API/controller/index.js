const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
//Import all model's objects
const {users} = require('../model')
//User's router
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/users/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register',bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})
routes.put('/user/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
routes.patch('/user/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
routes.delete('/user/:id', (req, res)=>{
    users.delete(req, res)
})

module.export = {
    express,
    routes
}
// routes.get('^/$|/challenger', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, "../static/HTML/index.html"))
// })
