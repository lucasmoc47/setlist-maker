import React, { useState, useEffect } from 'react';

import api from '../../services/api'

import NavBar from '../../components/NavBar'

// import { Container } from './styles';

export default function ShowSetlist({ match, history }) {
	const [setlist, setSetlist] = useState({})
	const [loading, setLoading] = useState(true)

	async function getSetlist() {
		const _id = match.params.setlist_id
		const response = await api.getSetlistById(_id)

		if (response.data){
			setSetlist(response.data)
			setLoading(false)
		}
		else
			console.log(response)
	}

	useEffect(() => {
		getSetlist()
	}, [])

	if(loading) return 'Loading'

	return (
		<>
			<NavBar title={setlist.name} goBack={history.goBack} />
			<ul>
				{setlist.songs.map(song => (
					<li key={song._id}>{song.title}</li>
				))}
			</ul>
		</>
	);
}
