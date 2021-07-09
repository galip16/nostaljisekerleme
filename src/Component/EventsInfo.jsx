import React from "react";
import { Card, Button } from "react-bootstrap";

function EventsInfo({
  CardUrl,
  CardTitle,
  CardTextDate,
  CardTextPlace,
  CardBtn,
}) {
  return (
    <div>
      <Card style={{ width: "20rem", margin: "30px" }}>
        <Card.Img style={{ height: "15rem" }} variant="top" src={CardUrl} />
        <Card.Body>
          <Card.Title>{CardTitle}</Card.Title>
          <Card.Text>{CardTextDate}</Card.Text>
          <Card.Text>{CardTextPlace}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">{CardBtn}</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default EventsInfo;
