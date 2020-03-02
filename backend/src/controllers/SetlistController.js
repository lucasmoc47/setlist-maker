const Setlist = require('../models/Setlist')

module.exports = {
	async index(req, res) {
		const setlists = await Setlist.find()

		return res.json(setlists)
	},

	async store(req, res) {
		const { name, songs } = req.body

		let setlist = await Setlist.findOne({ name })

		if(!setlist) 
			setlist = await Setlist.create({
				name, 
				songs
			})

		return (res.json(setlist))
	}
}