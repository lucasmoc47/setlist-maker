import React, { useState } from 'react';

import useToggleState from '../../hooks/useToggleState'

import './styles.css';

export default function Song({ song, songs, setSongs }) {
	const [isEditing, toggleEditing] = useToggleState(false)
	const [tempSong, setTempSong] = useState(song)

	function handleSongDelete(id) {
		const filteredSongs = songs.filter(song => song.id !== id)

		setSongs(filteredSongs)
	}

	function handleSongEdit(id) {
		const index = songs.map(song => song.id).indexOf(id)
		let tempSongs = songs

		tempSongs[index] = tempSong

		setSongs(tempSongs)
		toggleEditing()
	}

	if (isEditing) {
		return (
			<div style={{ display: 'flex' }}>
				<input 
					autoFocus
					value={tempSong.title} 
					onChange={e => setTempSong({ title: e.target.value, id: song.id })}
				/>
				<i 
					className="fas fa-pen"
					onClick={e => {
						e.stopPropagation()
						handleSongEdit(tempSong.id)
					}}
				/>
			</div>
		)
	}

	return (
		<div style={{ display: 'flex' }}>
			<p>{tempSong.title}</p>
			<div className="icons">
				<i 
					className="fas fa-pen"
					onClick={e => {
						e.stopPropagation()
						toggleEditing() 
					}}
				/>
				<i
					className="fas fa-trash"
					onClick={e => {
						e.stopPropagation()
						handleSongDelete(tempSong.id)
					}}
				/>
			</div>
		</div>
	);
}
