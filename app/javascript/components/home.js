import React from 'react';
import Login from './Login';
import Signup from './Signup';
import backgroundImage from '../../assets/images/home_background.png';

const Home = ({isLogin}) => {

  return (
    <div className="container-fluid home" >
    	<div className="row" style={{ height: "100%" , alignItems: "center"}}>
    		<div className="col-sm-8" style={{ fontSize: "60px", fontWeight: "bold", color: "white"}}>
    			A digital rack to store all your favourite movies..
    		</div>
    		<div className="col-sm-4  px-5">
    			{ isLogin ? <Login /> : <Signup />}
    		</div>
    	</div>
    </div>
  )

}

export default Home;