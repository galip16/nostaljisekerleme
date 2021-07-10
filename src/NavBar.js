import { React, useState, useEffect } from "react";
import "./NavBar.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "./Images/logo1.png";

import { CgInstagram, CgFacebook } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth > 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    // <div className="navBar pt-5">
    <>
      <Navbar bg="light">
        {/* <Container className={`mt-4`}> */}
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              alt="Nostalji Sekerleme Logo"
              src={Logo}
              width="120"
              height="80"
              className="d-inline-block align-center"
            />
            <div className="d-flex flex-column ml-3 mt-2">
              <h4>Nostalji Şekerleme</h4>
              <p style={{ fontSize: "12px" }}>
                Organizasyonunuza tat katıyoruz...
              </p>
            </div>
          </Navbar.Brand>

          {isMobile ? (
            <Button variant="outline-info">Bize Ulaşın</Button>
          ) : (
            <FiPhoneCall fontSize="25" />
          )}
        </Container>
      </Navbar>

      <Navbar bg="light" expand="md" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" variant="dark">
              <Nav.Link href="/">Anasayfa</Nav.Link>
              <Nav.Link href="/about">Hakkımızda</Nav.Link>
              <Nav.Link href="/products">Ürünler</Nav.Link>
              <Nav.Link href="/gallery">Galeri</Nav.Link>
              <Nav.Link href="/events"> Etkinlikler</Nav.Link>
              <Nav.Link href="/instagram">Instagram</Nav.Link>
              <Nav.Link href="/contact">İletişim</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link
                href="https://www.instagram.com/bursa_nostalji_sekerleme/"
                target="_blank"
              >
                <CgInstagram />{" "}
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/bursa_nostalji_sekerleme/"
                target="_blank"
              >
                <CgFacebook />{" "}
              </Nav.Link>
              {/* <Button variant="secondary">0537 637 06 81</Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
