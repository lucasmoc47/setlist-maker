const express = require('express')

const routes = express.Router()

const SetlistController = require('./controllers/SetlistController')

routes.get('/', (req, res) => res.send('Hello from api'))

routes.get('/setlists', SetlistController.index)
routes.post('/setlists', SetlistController.store)

module.exports = routes