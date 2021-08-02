import React from "react";
import { Card, Button, Container, CardGroup, Link } from "react-bootstrap";
import "./Contact.css";

//Features to be added in future versions
//maili ve telefonu tiklaninca clipboarda kopyalama

function Contact() {
  return (
    <div>
      <CardGroup className="m-5">
        <Card bg="light" border="light" className="">
          <Card.Body className="d-flex flex-column justify-content-center ">
            <Card.Text>
              <b> Recep SAVUT </b>
            </Card.Text>
            <Card.Text>Osmangazi / BURSA</Card.Text>
            <Card.Text>
              <Button variant="light">
                bursanostaljiorganizasyon@gmail.com
              </Button>
            </Card.Text>
            <Card.Text>
              <Button variant="light">0537 637 06 81</Button>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            className="imgStyle"
            variant="top"
            src="https://static.wixstatic.com/media/nsplsh_817afd2b04024c16a16da0f597173f92~mv2.jpg/v1/fill/w_613,h_460,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/nsplsh_817afd2b04024c16a16da0f597173f92~mv2.webp"
          />
        </Card>
      </CardGroup>
    </div>
  );
}

export default Contact;
