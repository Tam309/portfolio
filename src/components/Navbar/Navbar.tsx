import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import style from './Navbar.module.css';

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className={`${style.navbar} navbar-dark`} fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className={style.brand}>
          TamDoan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`${style.navLink} ${activeLink === 'Home' ? style.active : ''}`}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`${style.navLink} ${activeLink === 'About' ? style.active : ''}`}
              onClick={() => handleLinkClick('About')}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio"
              className={`${style.navLink} ${activeLink === 'Portfolio' ? style.active : ''}`}
              onClick={() => handleLinkClick('Portfolio')}
            >
              Portfolio
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://github.com/Tam309"
              target="_blank"
              rel="noopener noreferrer"
              className={style.navLink}
              style={{ color: 'white' }}
            >
              <FaGithub size={30} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;