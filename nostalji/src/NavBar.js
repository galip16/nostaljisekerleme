import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "./Images/logo1.png"

import { CgInstagram, CgFacebook } from 'react-icons/cg';



function NavBar() {
  return (
    <div className="navBar" >

      <Container bg="dark">
        <Nav.Link > <Link to="/"  >  <img src={Logo} alt="sekerleme" width="20%" /></Link></Nav.Link>
        <h1>Nostalji Sekerleme</h1>
        <p>Organizasyonunuza Tat Katiyoruz..</p>
      </Container>


      <Navbar bg="light" expand="md" >

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto mb-0" >
            <Nav.Link > <Link to="/" > Anasayfa </Link></Nav.Link>
            <Nav.Link > <Link to="/about" > Hakkimizda </Link></Nav.Link>
            <Nav.Link > <Link to="/products" > Ürünler </Link></Nav.Link>
            <Nav.Link > <Link to="/gallery" > Galeri </Link></Nav.Link>
            <Nav.Link > <Link to="/events" > Etkinlikler </Link></Nav.Link>
            <Nav.Link > <Link to="/instagram" > Instagram </Link></Nav.Link>
            <Nav.Link > <Link to="/contact" > Iletisim </Link></Nav.Link>
          </Nav>

          <Nav>
            <i href="www.instagram.com">  <CgInstagram /> </i>
            <i href="www.facebook.com">   <CgFacebook /> </i>
            <Button variant="secondary">0537 637 06 81</Button>
          </Nav>

        </Navbar.Collapse>

      </Navbar>




    </div>
  );
}

export default NavBar;
