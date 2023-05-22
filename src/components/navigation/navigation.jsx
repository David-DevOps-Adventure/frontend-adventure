import React, { useState } from "react";
import "./navigation.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Brand from "../brand/brand";
import toggleIconOpen from "../../assets/icons/ui/hamburger.png";
import toggleIconClosed from "../../assets/icons/ui/hamburger-closed.gif";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("About");

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setExpanded(false);

    // Scroll to the corresponding component with the top aligned to the viewport
    const element = document.getElementById(section);
    const navbarHeight = document.querySelector(".navigation-bar").offsetHeight;
    const elementPosition = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };

  const toggleIcon = expanded ? toggleIconClosed : toggleIconOpen;

  return (
    <div className="navigation-bar sticky-top">
      <Navbar
        sticky="top"
        expand="lg"
        expanded={expanded}
        onToggle={handleToggle}
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
                onClick={() => handleLinkClick("About")}
              >
                About
              </Nav.Link>
              <Nav.Link
                className={`link ${
                  activeSection === "Experience" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("Experience")}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                className={`link ${
                  activeSection === "Testimonials" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("Testimonials")}
              >
                Testimonials
              </Nav.Link>
              <Nav.Link
                className={`link ${
                  activeSection === "Contact" ? "active" : ""
                } contact`}
                onClick={() => handleLinkClick("Contact")}
              >
                <Button variant="primary">Contact</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
