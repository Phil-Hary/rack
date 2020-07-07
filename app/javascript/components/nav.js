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

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const addToggle = () => setModal(!modal);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Rack</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink onClick={addToggle}>Add Movie</NavLink>
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