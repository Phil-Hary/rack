import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RackProvider } from '../store';
import AddMovie1 from './AddMovie1';
import Movies from './movies';
import Alert from './Alert';
import Movie from './movie';
import Home from'./home';
import Nav from './nav';
import './app.css';

const App = () => {

	const toggleAlertVisbiltiy = () => setAlertVisibility(!isAlertVisible);

	return (
		<RackProvider>
			<div className="rack-main">
				<Router>
					<Alert />
					<Nav/>
					<Switch>
						<Route exact path="/" render={(props) => <Home {...props} isLogin />} />
						<Route exact path="/signup" render={(props) => <Home {...props} isLogin={false} />} />
						<Route exact path="/movies" render={(props) => (<Movies {...props} type="all" />)} />
						<Route exact path="/my-rack" render={(props) => (<Movies {...props} type="rack" />)}/>
						<Route exact path="/add-movie" render={(props) => (<AddMovie1 {...props} />)} />
						<Route exact path="/movie/:slug" component={Movie}/>
					</Switch>
				</Router>
			</div>
		</RackProvider>
	)
}

export default App;