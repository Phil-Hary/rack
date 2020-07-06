import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './movies';
import Movie from './movie';
import Nav from './nav';
import './app.css';

const App = () => {
	return (
		<div className="rack-main">
			<Nav/>
			<Router>
				<Switch>
					<Route exact path="/" component={Movies}/>
					<Route exact path="/movie/:slug" component={Movie}/>
				</Switch>
			</Router>
		</div>
	)
}

export default App;