import React, { useState, useEffect } from 'react';

import api from '../../services/api'

import './styles.css'

import NavBar from '../../components/NavBar'

export default function Index() {
	const [setlists, setSetlists] = useState([])

	async function getSetlists() {
		const { data } = await api.getSetlists()

		setSetlists(data)
	}

	useEffect(() => {
		getSetlists()
	}, [])

	function handleDelete(setlist) {
		const confirmation = window.confirm(`Delete the setlist ${setlist.name}?`)

		if(confirmation){
			api.deleteSetlist(setlist._id)
		}

		getSetlists()
	}

	return (
		<div>
			<NavBar title="SETLISTS"/>
			<div>
				<ul>
					{setlists.map(setlist => (
						<li key={setlist.name}>
							<span>{setlist.name}</span>
							<i className="editIcon" onClick={() => {}}>edit</i>
							<i className="deleteIcon" onClick={() => handleDelete(setlist)}>delete</i>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
