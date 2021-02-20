import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import AddMovie from './addMovie';
import { useHistory } from 'react-router-dom';

const NavBar = (props) => {
  
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const addToggle = () => setModal(!modal);

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
              <NavLink onClick={() => history.push("/my-rack")} style={{ cursor: "pointer"}} >My Rack</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {
        <AddMovie modal={modal} toggle={addToggle}/>
      }
    </div>
  );
}

export default NavBar;