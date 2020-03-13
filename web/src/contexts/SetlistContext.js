import React, { createContext, useState, useEffect } from 'react'

import api from '../services/api'

export const SetlistContext = createContext()

export function SetlistProvider(props) {
	const [setlists, setSetlists] = useState([])
	const [loading, setLoading] = useState(true)
	
	useEffect(() => {
		getSetlists()
	}, [])

	async function getSetlists() {
		const { data } = await api.getSetlists()

		setSetlists(data)
		setLoading(false)
	}

	async function createSetlist(setlist) {
		console.log(setlist)

		if (setlist) {
			const response = await api.createSetlist(setlist)

			console.log(response)

			getSetlists()
		}
		else {
			console.log('Setlist Inválida')
		}
	}

	async function handleDelete(setlist) {
		const confirmation = window.confirm(`Delete the setlist ${setlist.name}?`)

		if (confirmation) {
			await api.deleteSetlist(setlist._id)
			getSetlists()
		}
		
	}

	return (
		<SetlistContext.Provider value={{ setlists, loading, handleDelete, createSetlist }}>
			{props.children}
		</SetlistContext.Provider>
	)
}