import { signOut } from 'firebase/auth';
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
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
      <Navbar collapseOnSelect expand="lg"  className="navbar ">
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            OnTheGo.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='navbar-menu' as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className='navbar-menu' to="#services">Services</Nav.Link>
              <Nav.Link className='navbar-menu' as={Link} to="/tours">Tours</Nav.Link>
              <Nav.Link className='navbar-menu' as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className='navbar-menu' as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              {
                user ? 
                <Nav.Link as={Link} onClick={handleSingOut}  className='navbar-menu'>Sing Out</Nav.Link>
                :
                <Nav.Link as={Link} to="/login" className='navbar-menu'>
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
