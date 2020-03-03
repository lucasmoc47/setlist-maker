import React from 'react';
import './App.css';

import ShowAllSetlists from './pages/ShowAllSetlists'
import NewSetlist from './pages/NewSetlist'

function App() {
	return (
		<div className="App">
			<ShowAllSetlists />
			<NewSetlist />
		</div>
	);
}

export default App;
