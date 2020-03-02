import axios from 'axios'

const API_URL = 'http://localhost:3333'

const api = axios.create({
	baseURL: API_URL
})

const getSetlists = () => api.get('/setlists')

const apis = {
	getSetlists
}

export default apis