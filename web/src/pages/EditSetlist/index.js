import React, { useState, useEffect, useContext } from 'react';

import { SetlistContext } from '../../contexts/SetlistContext'

import NavBar from '../../components/NavBar'

import './styles.css'

export default function EditSetlist({ match, history }) {
	const { setlists } = useContext(SetlistContext)
	const [setlist, setSetlist] = useState({})
	const [loading, setLoading] = useState({})

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
			<NavBar title="EDIT SETLIST" goBack={history.goBack} />
			<form>

			</form>
		</>
	);
}
