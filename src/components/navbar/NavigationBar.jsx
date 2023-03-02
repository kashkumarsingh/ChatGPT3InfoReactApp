import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./navbar.css";

const NavigationBar = () => {
  //useState hook
  const [toggleMenuIcon, setToggleMenuIcon] = useState(false);

  const Menu = () => (
    <>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Nav.Link href="#home">Home</Nav.Link>
        </li>
        <li className="nav-item">
          <Nav.Link href="#wgpt3">What is GPT3</Nav.Link>
        </li>
        <li className="nav-item">
          <Nav.Link href="#possiblity">Open AI</Nav.Link>
        </li>
        <li className="nav-item">
          <Nav.Link href="#features">Case Studies</Nav.Link>
        </li>
        <li className="nav-item">
          <Nav.Link href="#blog">Library</Nav.Link>
        </li>
      </ul>
    </>
  );

  const ToggleIcon = () =>
    toggleMenuIcon ? (
      <RiCloseLine
        color="#212529"
        size={27}
        onClick={() => setToggleMenuIcon(false)}
      />
    ) : (
      <RiMenu3Line
        color="#212529"
        size={27}
        onClick={() => setToggleMenuIcon(true)}
      />
    );
  return (
    <div className="gpt3__navbar">
      <Navbar className="gpt3__navbar_nav" bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="gpt3__navbar-brand">
            <Image alt="brand" width={120} src={logo} fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="gpt3__navbar-collapse">
             <ToggleIcon />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="gpt3__navbar-collapse"
            className="justify-content-end"
          >
            <Nav className="gpt3__navbar-links">
              <Menu />
            </Nav>
            <div className="gpt3__navbar-buttons">
              <Button
                className="gpt3__light gpt3__secondary"
                variant="outline-dark"
              >
                Sign In
              </Button>
              <Button className="gpt3__primary">Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
