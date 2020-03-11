import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar () {
  return (
    <div >
      <Navbar className="bg-light" expand="lg">
        <Navbar.Brand as={Link} to="/">Cat Findr</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/favs">Favs</Nav.Link>
          <Nav.Link as={Link} to="/search">Search</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export { NavigationBar };
