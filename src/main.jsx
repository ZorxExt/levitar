import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DivVideo from "./components/DivVideo.jsx";
import CardLink from "./components/CardLink.jsx";
import CardLinkXL from "./components/CardLinkXL";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer";
import TecCard from "./components/TecCard";
import ServiceCard from "./components/ServiceCard";
import ContactCard from "./components/ContactCard";
import FolioCard from "./components/FolioCard";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DivVideo></DivVideo>
    <Card
      title="SOMOS"
      text="UN EQUIPO DE PROFESIONALES DE LA IMAGEN AÉREA"
    ></Card>
    <CardLink
      title="TECNOLOGÍA"
      linkImg="TecImg.jpg"
      cardComponent={<TecCard></TecCard>}
    ></CardLink>
    <CardLinkXL
      title="PORTAFOLIO"
      linkImg="PortafolioImg.jpg"
      cardComponent={<FolioCard></FolioCard>}
    ></CardLinkXL>
    <Card
      title="NOS ELIGEN"
      text="PERSONAS Y EMPRESAS CON PROYECTOS DE ALTO VUELO"
    ></Card>
    <CardLink
      title="SERVICIOS"
      linkImg="ServiciosImg.jpg"
      cardComponent={<ServiceCard></ServiceCard>}
    ></CardLink>
    <CardLink
      title="CONTACTO"
      linkImg="ContactoImg.jpg"
      cardComponent={<ContactCard></ContactCard>}
      cardBG={"faro.jpeg"}
      isWhite = {true}
    ></CardLink>
    <Footer></Footer>
  </React.StrictMode>
);
