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

	function handleDelete(setlist_id) {
		console.log(setlist_id)
	}

	return (
		<div>
			<NavBar />
			<div>
				<ul>
					{setlists.map(setlist => (
						<li key={setlist.name}>
							<span>{setlist.name}</span>
							<i className="editIcon" onClick={() => {}}>edit</i>
							<i className="deleteIcon" onClick={() => handleDelete(setlist._id)}>delete</i>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
