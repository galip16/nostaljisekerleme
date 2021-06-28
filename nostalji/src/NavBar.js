import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <div className="navBar" >

      <Container bg="dark">
      <h1>Logo</h1>
        <h1>Nostalji Sekerleme</h1>
        <p>Organizasyonunuza Tat Katiyoruz..</p>
      </Container>

    
        <Navbar bg="light"  expand="md" >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="m-2">
            <Nav className="mr-2" >
              <Nav.Link to="/home" > <Link  > Anasayfa</Link></Nav.Link>
              <Nav.Link ><Link to="/about" > Hakkimizda</Link></Nav.Link>
              <Nav.Link > <Link to="/products" > Ürünler</Link></Nav.Link>
              <Nav.Link > <Link to="/gallery" > Galeri</Link></Nav.Link>
              <Nav.Link > <Link to="/events" > Etkinlikler</Link></Nav.Link>
              <Nav.Link > <Link to="/instagram" > Instagram</Link></Nav.Link>
              <Nav.Link > <Link to="/contact" > Iletisim</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
  



    </div>
  );
}

export default NavBar;
