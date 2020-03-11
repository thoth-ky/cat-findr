import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar () {
  return (
    <Navbar className="bg-light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Cat Findr</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#favs">Favs</Nav.Link>
        <Nav.Link href="#search">Search</Nav.Link>
    </Nav>
    </Navbar>
  )
}

export { NavigationBar };