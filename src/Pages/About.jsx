import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import seker from "../Images/seker.webp";

function About() {
  return (
    <div>
      {/* <img src="../Images/seker.webp"  alt="" className="foto"/> */}
      <Card className="backgroundAbout">
        {/* <Card.Body className="cardbody d-flex flex-column justify-content-center text-center"> */}

        <Card.Body className="cardbody">
          <Card.Header as="h2" className="headerAbout">
            Nostalji Sekerleme Hikayemiz
          </Card.Header>
          <Card.Text className=" cardText text-justify border">
            <p>
              {" "}
              2000’li yıllarından başında “Krokan Helva” üretmeye başlayarak
              girdiğimiz sektörde ürün yelpazemize “Osmanlı Macununu” katarak
              Bursa ili çevresinde gerçekleşen Ertuğrul Gazi’yi anma ve Söğüt
              Şenlikleri ve “İznik Panayırı” başta olmak üzere birçok etkinlikte
              yer aldık.
            </p>

            <p>
              2005 itibari ile klasik Pamuk Şeker anlayışını yıkarak kendi
              ürettiğimiz makineler ile “Pamuk Şeker” satışına başladık. Evlilik
              ve sünnet düğünlerinde misafirlerine ürünlerimizi ikram etmek
              isteyen müşterilerimiz bizlere ulaşmaya başladı.Müşteri
              memnuniyeti artınca kendimizi geliştirmeye yönelik Ar-ge
              çalışmaları yürüttük ve kadromuza “Patlamış Mısır”, “Salep”, “Elma
              Şekeri” kattık. Artık Bursa çapında düzenlenen birçok festivalde
              görev almaya başladık.{" "}
            </p>

            <p>
              {" "}
              2010 yılında Osmanlı Mutfağının şifalı içeceklerinden “Osmanlı
              Şerbetini” orijinal tarifiyle ürettik ve yazın sıcağında
              müşterilerimizin ferahlamasına vesile olduk. Nostalji Şekerleme
              olarak amacımız insanlara sağlıklı, olabildiğince doğal ve
              kaliteli yeni ürünler sunabilmek ve organizasyonlara tat
              katmaktır.
            </p>

            <p>
              Sizi Nostalji Seker deneyimini bizzat yaşamaya davet ediyoruz.
            </p>
          </Card.Text>
          <Card.Img
            className="imageAbout"
            height="500px"
            variant="top"
            src={seker}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
