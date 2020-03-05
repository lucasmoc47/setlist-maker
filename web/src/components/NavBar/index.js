import React from 'react';

import './styles.css'

export default function NavBar(props) {
	return (
		<nav>
			{props.title === "SETLISTS" ? <i>logo</i> : <i onClick={() => props.goBack()}>back</i>}
			<h1>{props.title}</h1>
			<i>logout</i>
		</nav>
	);
}
