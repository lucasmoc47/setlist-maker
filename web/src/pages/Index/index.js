import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'

import api from '../../services/api'

import './styles.css'

import NavBar from '../../components/NavBar'

export default function Index() {
	const [setlists, setSetlists] = useState([])

	useEffect(() => {
		async function getData() {
			const { data } = await api.getSetlists()

			setSetlists(data)
		}

		getData()
	}, [])

	return (
		<div>
			<NavBar />
			<div>
				<ul>
					{setlists.map(setlist => (
						<li key={setlist.name}>{setlist.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
