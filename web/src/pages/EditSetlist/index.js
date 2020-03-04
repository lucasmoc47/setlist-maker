import React, { useState, useEffect } from 'react';

import api from '../../services/api'

import './styles.css'

export default function EditSetlist({ match }) {
	const [setlist, setSetlist] = useState({})

	async function getSetlist() {
		const _id = match.params.setlist_id
		const response = await api.getSetlistById(_id)

		if(response.data)
			setSetlist(response.data)
		else
			console.log(response)
	}

	useEffect(() => {
		getSetlist()
	}, [])

	return (
		<p>{setlist.name}</p>
	);
}
