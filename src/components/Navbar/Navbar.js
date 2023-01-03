import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './Navbar.css'
import {AiOutlineHome,AiOutlineUser, AiFillGithub, AiOutlineProfile,} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";


const NavBar1 = () => {
  
  const [expand, setExpand] = useState(false);
  // const [navColour, setNavcolour] = useState(false);

  // function scrollHandler() {
  //   if (window.scrollY >= 20) {
  //     setNavcolour(true);
  //   } else {
  //     setNavcolour(false);
  //   }
  // }
  // window.addEventListener("scroll", scrollHandler);


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="navbar"
      // className={navColour ? "sticky" : "navbar"}
    >
      <Container>

        <Navbar.Brand href="/" className="d-flex">
          <h2><span>V</span>S{""}.</h2>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpand(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>


        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ms-auto" defaultActiveKey="#home">
            
            <Nav.Item>
              <Nav.Link as={Link} to="/Portfolio" onClick={() => setExpand(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Portfolio/about"
                onClick={() => setExpand(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Portfolio/project"
                onClick={() => setExpand(false)}
              >
                <AiOutlineProfile
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Portfolio/resume"
                onClick={() => setExpand(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
             
              <Button
                href="https://github.com/Vivek-Sanjay-Shukla"
                target="_blank"
                className="fork-btn-inner"
              >

                  <AiFillGithub style={{ fontSize: "1.43em" }}/>

              </Button>
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar1;