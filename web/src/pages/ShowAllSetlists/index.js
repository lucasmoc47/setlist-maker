import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import { SetlistContext } from '../../contexts/SetlistContext'

import './styles.css'

import NavBar from '../../components/NavBar'


export default function ShowAllSetlists({ match }) {
	const { setlists, loading, handleDelete } = useContext(SetlistContext)

	if (loading) return "Loading"

	return (
		<div>
			<NavBar title="SETLISTS" leftItem="logo" />
			<div>
				<ul>
					{setlists.map(setlist => (
						<li key={setlist.name}>
							<Link to={`${match.path}/${setlist._id}`}>{setlist.name}</Link>
							<Link to={`${match.path}/edit/${setlist._id}`}>edit</Link>
							<i className="deleteIcon" onClick={() => handleDelete(setlist)}>delete</i>
						</li>
					))}
				</ul>
			</div>
			<Link to="/new_setlist">NEW SETLIST</Link>
		</div>
	);
}
