import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import EventsInfo from "../Component/EventsInfo";
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
      <CardGroup className="eventsCardStyle">
        {events.map((element) => {
          return (
            <EventsInfo
              CardUrl={element.imgUrl}
              CardTitle={element.name}
              CardTextDate={element.date}
              CardTextPlace={element.place}
              CardBtn="Detay Ögren"
            />
          );
        })}
      </CardGroup>
    </div>
  );
}

export default Events;
