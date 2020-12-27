import React, {useState} from 'react';
import axios from 'axios';

const Signup = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const signUpUser = async (e) => {
		e.preventDefault();
		if(password !== confirmPassword) {
			console.log("Password donot match")
			return;
		}

		const res = await axios.post("/api/v1/users", {
				user: {
					name,
					email,
					password,
				}
		})
	}

	return(
		<form className="login-background">
			<div class="form-group">
		    <label for="userName">Name</label>
		    <input type="text" class="form-control" id="userName" onChange={e => setName(e.target.value)} value={name}/>
		  </div>
		  <div class="form-group">
		    <label for="exampleInputEmail1">Email address</label>
		    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} value={email}/>
		    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
		  </div>
		  <div class="form-group">
		    <label for="exampleInputPassword1">Password</label>
		    <input type="password" class="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} value={password}/>
		  </div>
		  <div class="form-group">
		    <label for="confirmPassword">Confirm Password</label>
		    <input type="password" class="form-control" id="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}/>
		  </div>
		  <div class="form-group form-check">
		    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
		    <label class="form-check-label" for="exampleCheck1">Check me out</label>
		  </div>
		  <div>
				 <a href="/login">Login</a>
			</div>
		  <button type="submit" class="btn btn-primary" onClick={signUpUser}>Submit</button>
		</form>
	)
}

export default Signup;
