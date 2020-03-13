import React, { useState, useContext } from 'react';

import { SetlistContext } from '../../contexts/SetlistContext'

import { v4 as uuidv4 } from 'uuid'

import NavBar from '../../components/NavBar'
import Song from '../../components/Song'

export default function NewSetlist({ history }) {
	const { createSetlist } = useContext(SetlistContext)
	const [name, setName] = useState('')
	const [songs, setSongs] = useState([])
	const [song, setSong] = useState({ title: '', id: null })

	function handleSongSubmit() {
		if (song.title === '') {
			alert('The song must have a title!')
		}
		else {
			song.id = uuidv4()

			setSongs([...songs, song])
			setSong({ title: '', id: null })
		}
	}
	
	function handleSetlistSubmit(e) {
		e.preventDefault()

		if (songs.length) {
			const noIdSongs = songs.map(song => ({ title: song.title }))

			const setlist = {
				name,
				songs: noIdSongs
			}

			createSetlist(setlist)

			history.push('/setlists')
		}
		else {
			alert('Empty setlist!')
		}
	}

	function handleSetlistClear(e) {
		e.preventDefault()

		setName('')
		setSongs([])
		setSong({ title: '', id: null })
	}

	return (
		<>
			<NavBar title="NEW SETLIST" goBack={history.goBack} />
			<form className="setlistForm" onSubmit={handleSetlistSubmit}>
				<label htmlFor="setlistName">SETLIST NAME</label>
				<input
					type="text"
					id="setlistName"
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder="SetList Name"
					required
				/>

				<div className="songInput">
					<input
						type="text"
						value={song.title}
						onChange={e => setSong({ title: e.target.value })}
						placeholder="Song Name"
					/>

					<i 
						className="fas fa-plus"
						onClick={handleSongSubmit}
					/>
				</div>
				
				{songs.map(song => (
					<Song 
						key={song.id} 
						song={song} 
						songs={songs}
						setSongs={setSongs}
					/>
				))}

				<button type="submit">SAVE</button>
				<button onClick={handleSetlistClear}>CLEAR</button>
			</form>
		</>
	);
}
