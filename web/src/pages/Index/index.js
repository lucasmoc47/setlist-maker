import React from 'react';
import { v4 as uuidv4 } from 'uuid'

import './styles.css'

import NavBar from '../../components/NavBar'

export default function Index() {
	const setLists = [
		{
			name: 'Casamento do Zé',
			songs: [
				{
					id: uuidv4(),
					title: 'Despacito'
				},
				{
					id: uuidv4(),
					title: 'Vai Malandra'
				},
				{
					id: uuidv4(),
					title: 'Bumbum Granada'
				},
				{
					id: uuidv4(),
					title: '5ª Sinfonia de Beethoven'
				},
			]
		},
		{
			name: 'Show no bar',
			songs: [
				{
					id: uuidv4(),
					title: 'asdasd'
				},
				{
					id: uuidv4(),
					title: 'Vai'
				},
				{
					id: uuidv4(),
					title: 'agnj523431'
				},
				{
					id: uuidv4(),
					title: 'Gremio'
				},
			]
		},
	]

	return (
		<div>
			<NavBar />
			<div>
				<ul>
					{setLists.map(setList => (
						<li key={setList.name}>{setList.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
