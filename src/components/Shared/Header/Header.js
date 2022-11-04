import { signOut } from 'firebase/auth';
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";



import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSingOut = () => {
    signOut(auth);
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            OnTheGo.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link to="#services">Services</Nav.Link>
              <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/singup">
                Sing up
              </Nav.Link>
              {
                user ? 
                <Button onClick={handleSingOut} className='btn btn-link text-decoration-none text-white'>Sing Out</Button>
                :
                <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
