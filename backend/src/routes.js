const express = require('express')

const routes = express.Router()

const SetlistController = require('./controllers/SetlistController')

routes.get('/setlists', SetlistController.index)
routes.get('/setlists/:setlist_id', SetlistController.show)
routes.post('/setlists', SetlistController.store)
routes.put('/setlists/:setlist_id', SetlistController.update)
routes.delete('/setlists/:setlist_id', SetlistController.delete)

module.exports = routes