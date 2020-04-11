const express = require('express')
const nunjuks = require('nunjucks')
const data = require('./data')

const server = express()

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjuks.configure('views', {
    express: server
})

server.get('/', function (req, res) {
    res.render('about')
})

server.get('/courses', function (req, res) {
    res.render('courses', {
        itens: data
    })
})

server.use(function (req, res) {
    res.status(404).render("not-found")
})

server.listen(5000, function () {
    console.log('Server is running on port: 5000!')
})