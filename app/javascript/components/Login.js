import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {RackContext} from '../store'; 

const Login = () => {

	const [ email, setEmail ] =  useState('');
	const [ password, setPassword ] = useState('');
	const [ isLoading, setLoading ] = useState(true);
	const { rackState, rackActions } = useContext(RackContext);

	const login = async (e) => {
		e.preventDefault();
		if(!email || !password) {
			rackActions.displayAlert("Invalid credentials", "error");
			return;
		}

		const {status, data} =  await axios.post('/api/v1/login', {
			session: {
				email,
				password
			}
		});

		if(status === 200) {
			const { email, name } = data.user;
			rackActions.loginUser(email, name, true);
		} else {
			const { msg } = data;
			rackActions.displayAlert(msg, "error");
		}
	}
	return(
		<form className="login-background">
			<div className="form-group">
		   <label htmlFor="exampleInputEmail1">Email address</label>
		   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email}/>
		  	<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
		 </div>
		 <div className="form-group">
		   <label htmlFor="exampleInputPassword1">Password</label>
		   <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} value={password}/>
		 </div>
		 <div className="form-group form-check">
		   <input type="checkbox" className="form-check-input" id="exampleCheck1" />
		   <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
		 </div>
		 <div>
		 	<a href="/signup">Sign up</a>
		  </div>
		  <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
		</form>
	)
}

export default Login;