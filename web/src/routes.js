import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// import { Container } from './styles';

import ShowAllSetlists from './pages/ShowAllSetlists'
import NewSetlist from './pages/NewSetlist'
import EditSetlist from './pages/EditSetlist'
import ShowSetlist from './pages/ShowSetlist'

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/setlists" component={ShowAllSetlists} />
				<Route path="/setlists/edit/:setlist_id" component={EditSetlist} />
				<Route path="/setlists/:setlist_id" component={ShowSetlist} />
				<Route path="/new_setlist" component={NewSetlist} />
				<Redirect from="/" to="/setlists" />
			</Switch>
		</Router>
	);
}
