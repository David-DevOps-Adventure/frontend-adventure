import React, { useState } from "react";
import "./navigation.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import Brand from "../brand/brand";
import toggleIconOpen from "../../assets/icons/ui/hamburger.png";
import toggleIconClosed from "../../assets/icons/ui/hamburger-closed.gif";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("About");

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = (section, event) => {
    event.preventDefault(); // Prevent the default link behavior
    setActiveSection(section);
    setExpanded(false); // Close the navigation menu
  };

  const toggleIcon = expanded ? toggleIconClosed : toggleIconOpen;

  return (
    <div className="navigation-bar sticky-top">
      <Navbar
        sticky="top"
        expand="lg"
        expanded={expanded}
        onToggle={handleToggle}
        collapseOnSelect // Close the navigation menu on select
      >
        <Container>
          <Navbar.Brand className="navigation-brand">
            <Brand />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="no-outline"
          >
            <img className="hamburger" src={toggleIcon} alt="Toggle" />
          </Navbar.Toggle>
          <Navbar.Collapse className="mobile-nav">
            <Nav className="ms-auto text-center nav-links">
              <Nav.Link
                className={`link ${activeSection === "About" ? "active" : ""}`}
                onClick={(event) => handleLinkClick("About", event)}
                href="#About"
              >
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  duration={20}
                  offset={-70}
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link
                className={`link ${
                  activeSection === "Experience" ? "active" : ""
                }`}
                onClick={(event) => handleLinkClick("Experience", event)}
                href="#Experience"
              >
                <Link
                  to="Experience"
                  spy={true}
                  smooth={true}
                  duration={20}
                  offset={-70}
                >
                  Experience
                </Link>
              </Nav.Link>
              <Nav.Link
                className={`link ${
                  activeSection === "Testimonials" ? "active" : ""
                }`}
                onClick={(event) => handleLinkClick("Testimonials", event)}
                href="#Testimonials"
              >
                <Link
                  to="Testimonials"
                  spy={true}
                  smooth={true}
                  duration={20}
                  offset={-70}
                >
                  Testimonials
                </Link>
              </Nav.Link>
              <Nav.Link
                className={`link ${
                  activeSection === "Contact" ? "active" : ""
                } contact`}
                onClick={(event) => handleLinkClick("Contact", event)}
                href="#Contact"
              >
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  duration={20}
                  offset={-70}
                >
                  <Button variant="primary">Contact</Button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
