const express = require('express')

const routes = express.Router()

const SetlistController = require('./controllers/SetlistController')

routes.get('/', (req, res) => res.send('Hello from api'))

routes.get('/setlists', SetlistController.index)
routes.get('/setlists/:setlist_id', SetlistController.show)
routes.post('/setlists', SetlistController.store)
routes.put('/setlists/:setlist_id', SetlistController.update)

module.exports = routes