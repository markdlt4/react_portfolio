import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  return (
    <div className="fixed-bottom bg-light">
      <Nav className="justify-content-center">
        <NavItem>
          <NavLink href="#">© 2021 Mark Toups</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Linked In</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Github</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Example;