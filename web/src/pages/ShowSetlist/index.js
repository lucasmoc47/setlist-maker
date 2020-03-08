import React, { useState, useEffect, useContext } from 'react';

import NavBar from '../../components/NavBar'

import { SetlistContext } from '../../contexts/SetlistContext'

// import { Container } from './styles';

export default function ShowSetlist({ match, history }) {
	const { setlists } = useContext(SetlistContext)
	const [setlist, setSetlist] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const _id = match.params.setlist_id
		const response = setlists.find(item => item._id === _id)

		if (response){
			setSetlist(response)
			setLoading(false)
		}
		else {
			console.log(`Error, couldn't find setlist with the id ${_id}`)
			history.push('/setlists')
		}
	}, [setlists])

	if(loading) return "Loading"

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
