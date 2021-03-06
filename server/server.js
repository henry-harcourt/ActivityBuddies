const path = require('path')
const express = require('express')
const server = express()

const activitiesRoutes = require('./routes/activities')
const postsRoutes = require('./routes/posts')
const authRoutes = require('./routes/auth')
server.use(express.urlencoded({extended: true})) // allows you to put info into post obj
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.json())

server.use('/api/v1/activities', activitiesRoutes)
server.use('/api/v1/posts', postsRoutes)
server.use('/api/v1', authRoutes)



module.exports = server





