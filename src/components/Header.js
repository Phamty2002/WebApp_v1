// src/components/Header.js
import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src="/images/logo.jpg" // Access the image using a relative path
            alt="Pasta Food Logo"
            width="40"
            height="40"
            className="logo"
          />
          Pasta Food
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
