import React from 'react';

import './styles.css'

export default function NavBar(props) {
  return (
	<nav>
		<i>logo</i>
		<h1>{props.title}</h1>
		<i>logout</i>
	</nav>
  );
}
