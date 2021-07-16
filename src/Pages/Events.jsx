import React from "react";
import { Card, Button, Container } from "react-bootstrap";

import "./Events.css";

function Events() {
  const events = [
    {
      imgUrl:
        "https://yugesk.files.wordpress.com/2019/10/img_20191005_0419171573987058.jpg",
      name: "Iznik Panayiri",
      date: "09.10.2021 - 13:00",
      place: "Iznik Meydan",
    },

    {
      imgUrl:
        "https://www.kitabimukaddes.com/images/blog/1/tuyapkitapfuari2015.jpg?t=1620839118://yugesk.files.wordpress.com/2019/10/img_20191005_0419171573987058.jpg",
      name: "Kitap Fuari",
      date: "15.04.2022 - 09:00",
      place: "Tüyap Fuar Alani",
    },
  ];

  return (
    <div>
      <h1>Yaklasan Etkinlikler</h1>

      <Container className="d-flex flex-row flex-wrap">
        {events.map((value) => {
          return (
            <Card className="cardStyle my-2 mx-auto">
              <Card.Img variant="top" src={value.imgUrl} height="300px" />
              <Card.Body>
                <Card.Title>{value.name}</Card.Title>
                <Card.Text>{value.date}</Card.Text>
                <Card.Text>{value.place}</Card.Text>
                <Button variant="primary">Ayrintili Bilgi</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}

export default Events;
