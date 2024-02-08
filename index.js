const server = require('express')()
const cors = require('cors')
const body_parser = require('body-parser')
const projects = require('./db')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 4000

const next = require('next')

const app = next({dev, hostname, port})

app.prepare().then(() => {

    server.use(cors())
    server.use(body_parser.urlencoded({extended: true}))
    server.use(body_parser.json({limit: '10mb'}))

    server.get('/api/projects', async (req, res) => {
        res.send(projects)
    })

    server.post('/api/project', async (req, res) => {
        let project = projects.find(el => el.id === req.body.id)
        
        res.send(project || null)
    })

    server.listen(port, () => console.log(`NextJS server on port ${port}`))
})