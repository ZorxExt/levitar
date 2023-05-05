import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DivVideo from "./components/DivVideo.jsx";
import CardLink from "./components/CardLink.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer";
import TecCard from "./components/TecCard";
import ServiceCard from "./components/ServiceCard";
import ContactCard from "./components/ContactCard";

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
    <CardLink title="PORTAFOLIO" linkImg="PortafolioImg.jpg"></CardLink>
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
    ></CardLink>
    <CardLink
      title="
      COMPOSICIÓN
      PERSPECTIVA
      VOLUMEN"
      linkImg="/CompoImg2.jpeg"
    ></CardLink>
    <Footer></Footer>
  </React.StrictMode>
);
