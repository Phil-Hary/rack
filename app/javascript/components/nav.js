import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import axios from "axios";
import AddMovie from './addMovie';
import { RackContext } from '../store'; 
import { useHistory } from 'react-router-dom';

const NavBar = (props) => {
  
  let history = useHistory();
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { rackState, rackActions } = useContext(RackContext);

  const { isLoggedIn } = rackState;

  const toggle = () => setIsOpen(!isOpen);
  const addToggle = () => setModal(!modal);

  const logoutUser = async () => {
    const {status, data } = await axios.post("/api/v1/logout");

    if(status == 200) {
      rackActions.logoutUser();
      history.push("/");
    }
  }

  const redirectToUserRack = () => {
    isLoggedIn ? (
      history.push("/my-rack")
    ) : (
      rackActions.displayAlert("You must login in order to view your rack!!", "info")
    ) 
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand onClick={() => history.push("/")} style={{ cursor: "pointer"}}>Rack</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink onClick={() => history.push("/movies")} style={{ cursor: "pointer"}}>Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={redirectToUserRack} style={{ cursor: "pointer"}} >My Rack</NavLink>
            </NavItem>
          </Nav>
          {isLoggedIn && (
              <Button outline color="danger" onClick={logoutUser}>Logout</Button>
          )}
        </Collapse>
      </Navbar>
      {
        <AddMovie modal={modal} toggle={addToggle}/>
      }
    </div>
  );
}

export default NavBar;