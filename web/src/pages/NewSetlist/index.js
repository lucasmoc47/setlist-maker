import React, { useState } from 'react';

import api from '../../services/api'
import { v4 as uuidv4 } from 'uuid'

import NavBar from '../../components/NavBar'

export default function NewSetlist({ history }) {
	const [name, setName] = useState('')
	const [songs, setSongs] = useState([])
	const [song, setSong] = useState({ title: '', id: null, duration: null })

	function handleSongSubmit(e) {
		e.preventDefault()

		if (song.title === '') {
			alert('The song must have a title!')
		}
		else {
			song.id = uuidv4()

			setSongs([...songs, song])
			setSong({ title: '', id: null, duration: null })
		}
	}

	function handleSongEdit(e, id) {
		e.preventDefault()

		const filteredSongs = songs.filter(song => song.id !== id)
		const selectedSong = songs.find(song => song.id === id)

		setSong(selectedSong)
		setSongs(filteredSongs)
	}

	function handleSongDelete(e, id) {
		e.preventDefault()

		const filteredSongs = songs.filter(song => song.id !== id)

		setSongs(filteredSongs)
	}

	async function handleSetlistSubmit(e) {
		e.preventDefault()

		if (songs.length) {
			const noIdSongs = songs.map(song => song.title)

			const setlistItem = {
				name,
				noIdSongs
			}

			await api.createSetlist(setlistItem)

			history.push('/setlists')

			/* 			setName('')
						setSongs([])
						setSong({ title: '', id: null, duration: null }) */
		}
		else {
			alert('Empty setlist!')
		}
	}

	function handleSetlistClear(e) {
		e.preventDefault()

		setName('')
		setSongs([])
		setSong({ title: '', id: null, duration: null })
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

					<button onClick={handleSongSubmit}>ADD SONG</button>
				</div>

				{songs.map(song => (
					<div key={song.id} style={{ display: 'flex' }}>
						<p>{song.title}</p>
						<button onClick={(e) => handleSongEdit(e, song.id)}>edit</button>
						<button onClick={(e) => handleSongDelete(e, song.id)}>delete</button>
					</div>
				))}

				<button type="submit">SAVE</button>
				<button onClick={handleSetlistClear}>CLEAR</button>
			</form>
		</>
	);
}
