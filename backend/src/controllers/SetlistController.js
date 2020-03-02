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
	},

	async show(req, res) {
		const _id = req.params.setlist_id

		const setlist = await Setlist.findById({ _id }).catch(err => console.log('setlist not found!'))

		if(!setlist)
			return res.status(404).json({ error: 'setlist not found!' })

		return res.json(setlist)
	}
}