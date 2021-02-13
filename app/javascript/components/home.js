import React, {useContext, useEffect, useState} from 'react';
import Login from './Login';
import Signup from './Signup';
import { useHistory }  from "react-router-dom";
import {RackContext} from '../store'; 
import backgroundImage from '../../assets/images/home_background.png';

const Home = ({isLogin}) => {

	const { rackState, rackActions } = useContext(RackContext);
	const { isLoggedIn } = rackState;
	let history = useHistory();

	useEffect(() => {
		const { user, isLoggedIn} = rackState;
		window.localStorage.setItem('email', user.email);
		window.localStorage.setItem('name', user.name);
		window.localStorage.setItem('isLoggedIn', isLoggedIn);

		if(isLoggedIn) {
			history.push("/movies");
		}
	},[rackState]);

  return (
    !isLoggedIn && (<div className="container-fluid home" >
        	<div className="row" style={{ height: "100%" , alignItems: "center"}}>
        		<div className="col-sm-8" style={{ fontSize: "60px", fontWeight: "bold", color: "white"}}>
        			A digital rack to store all your favourite movies..
        		</div>
        		<div className="col-sm-4  px-5">
        			{ isLogin ? <Login /> : <Signup />}
        		</div>
        	</div>
        </div>)
  )

}

export default Home;