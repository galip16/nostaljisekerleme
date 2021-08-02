import React from "react";
import cottoncandy from "../video/cotton-candy.mp4";
import "./responsive-player.css";
import { Button } from "reactstrap";

function ResponsivePlayer() {
  return (
    <div className="mainDiv">
      <video className="videoCandy" autoPlay loop muted>
        <source src={cottoncandy} type="video/mp4" />
      </video>
      <div className="mainText">
        <h1>Nostalji Sekerleme</h1>
        <p>Organizasyonunuzu tatlandirmak icin hizmetinizdeyiz..</p>
        <div className="btn">
          <Button outline color="dark">
            Daha Fazla Bilgi
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ResponsivePlayer;
