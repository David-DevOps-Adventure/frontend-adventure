import React, { useState } from "react";
import "./navigation.css";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import Brand from "../brand/brand";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("About");

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setExpanded(false);
  };

  return (
    <div className="navigation-bar">
      <Navbar
        sticky="top"
        expand="lg"
        expanded={expanded}
        onToggle={handleToggle}
      >
        <Container>
          <Navbar.Brand>
            <Brand />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="mobile-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link
                className={`link ${activeSection === "About" ? "active" : ""}`}
                href="#About"
                onClick={() => handleLinkClick("About")}
              >
                About
              </Nav.Link>
              <Nav.Link
                className={`link ${
                  activeSection === "Experience" ? "active" : ""
                }`}
                href="#Experience"
                onClick={() => handleLinkClick("Experience")}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                className={`link ${
                  activeSection === "Testimonials" ? "active" : ""
                }`}
                href="#Testimonials"
                onClick={() => handleLinkClick("Testimonials")}
              >
                Testimonials
              </Nav.Link>
              <Nav.Link className="">
                <Button
                  variant="primary"
                  href="#Contact"
                  onClick={handleLinkClick}
                >
                  Contact
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
