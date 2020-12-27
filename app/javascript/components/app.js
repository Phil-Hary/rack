import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RackProvider } from '../store';
import Movies from './movies';
import Movie from './movie';
import Home from'./home';
import Nav from './nav';
import './app.css';

const App = () => {
	return (
		<RackProvider>
			<div className="rack-main">
				<Router>
					<Nav/>
					<Switch>
						<Route exact path="/" render={(props) => <Home {...props} isLogin />} />
						<Route exact path="/signup" render={(props) => <Home {...props} isLogin={false} />} />
						<Route exact path="/movies" component={Movies}/>
						<Route exact path="/movie/:slug" component={Movie}/>
					</Switch>
				</Router>
			</div>
		</RackProvider>
	)
}

export default App;