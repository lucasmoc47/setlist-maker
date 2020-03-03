import axios from 'axios'

const API_URL = 'http://localhost:3333'

const api = axios.create({
	baseURL: API_URL
})

const getSetlists = () => api.get('/setlists')
const getSetlistById = (setlist_id) => api.get(`/setlists/${setlist_id}`)
const createSetlist = (payload) => api.post('/setlists', payload)
const updateSetlist = (setlist_id, payload) => api.put(`/setlists/${setlist_id}`, payload)
const deleteSetlist = (setlist_id) => api.delete(`/setlists/${setlist_id}`)

const apis = {
	getSetlists,
	getSetlistById,
	createSetlist,
	updateSetlist,
	deleteSetlist
}

export default apis