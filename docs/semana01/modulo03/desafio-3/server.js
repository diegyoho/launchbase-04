const express = require('express')
const nunjuks = require('nunjucks')
const courses = require('./data')

const server = express()

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjuks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function (req, res) {
    const about = {
        name: 'Rocketseat',
        logo: 'https://rocketseat.com.br/static/images/logo-rocketseat.svg',
        description: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo.',
        techs: [
            {
                name: 'NodeJS',
                logo: 'https://nodejs.org/static/images/logo.svg'
            },
            {
                name: 'ReactJS',
                logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
            },
            {
                name: 'React Native',
                logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
            }
        ],
        links: [
            {
                name: 'Github',
                url: 'https://github.com/Rocketseat'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/rocketseat_oficial/'
            },
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/rocketseat'
            }
        ]
    }
    res.render('about', { about })
})

server.get('/courses', function (req, res) {
    res.render('courses', {
        itens: courses
    })
})

server.get("/courses/:id", function (req, res) {
    const id = req.params.id;

    const course = courses.find(function (course) {
        return course.id === id
    })

    if (!course) {
        res.render('not-found')
    } else {
        res.render('course', { item: course })
    }
});

server.use(function (req, res) {
    res.status(404).render('not-found')
})

server.listen(5000, function () {
    console.log('Server is running on port: 5000!')
})