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
			<div className="setlists">
				<ul>
					{setlists.map(setlist => (
						<li key={setlist.name} className="setlist-item">
							<Link to={`${match.path}/${setlist._id}`}>{setlist.name}</Link>
							<Link to={`${match.path}/edit/${setlist._id}`}>
								<i className="fas fa-pen" />
							</Link>
							<i
								className="fas fa-trash"
								onClick={() => handleDelete(setlist)}
							/>
						</li>
					))}
				</ul>
				<Link to="/new_setlist">NEW SETLIST</Link>
			</div>
		</div>
	);
}
