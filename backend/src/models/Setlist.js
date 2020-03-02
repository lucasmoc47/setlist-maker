const mongoose = require('mongoose')

const SetlistSchema = new mongoose.Schema({
	name: String,
	songs: [{ title: String }]
})

module.exports = mongoose.model('Setlist', SetlistSchema)