import React from 'react';

import Routes from './routes'

import { SetlistProvider } from './contexts/SetlistContext'

import './App.css';

function App() {
	return (
		<SetlistProvider>
			<Routes />
		</SetlistProvider>
	);
}

export default App;
