import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './movies';
import Movie from './movies';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Movies}/>
				<Route path="/movie/:slug" component={Movie}/>
			</Switch>
		</Router>
	)
}

export default App;