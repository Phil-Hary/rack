import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {RackContext} from '../store'; 

const Login = () => {

	const [ email, setEmail ] =  useState('');
	const [ password, setPassword ] = useState('');
	const [ isLoading, setLoading ] = useState(true);
	const { rackState, rackActions } = useContext(RackContext);
	let history = useHistory();

	useEffect(() => {
		const { user, isLoggedIn} = rackState;
		window.localStorage.setItem('email', user.email);
		window.localStorage.setItem('name', user.name);
		window.localStorage.setItem('isLoggedIn', isLoggedIn);
	}, [rackState]);

	useEffect(() => {
		const { isLoggedIn } = rackState;

		if(isLoggedIn) {
			history.push("/movies");
		} else {
			setLoading(false);
		}
	},[rackState]);

	const login = async (e) => {
		e.preventDefault();
		if(!email || !password) {
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

		}

		console.log(res);
	}
	return(
		!isLoading && (<form className="login-background">
					<div class="form-group">
				   <label htmlFor="exampleInputEmail1">Email address</label>
				   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email}/>
				  	<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
				 </div>
				 <div class="form-group">
				   <label htmlFor="exampleInputPassword1">Password</label>
				   <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} value={password}/>
				 </div>
				 <div class="form-group form-check">
				   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
				   <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
				 </div>
				 <div>
				 	<a href="/signup">Sign up</a>
				  </div>
				  <button type="submit" class="btn btn-primary" onClick={login}>Submit</button>
				</form>)
	)
}

export default Login;