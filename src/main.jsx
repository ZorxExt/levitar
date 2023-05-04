import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DivVideo from "./components/DivVideo.jsx";
import CardLink from "./components/CardLink.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DivVideo></DivVideo>
    <Card
      title="SOMOS"
      text="UN EQUIPO DE PROFESIONALES DE LA IMAGEN AÉREA"
    ></Card>
    <CardLink
      title="TECNOLOGÍA"
      link="https://levit.ar/tecnologia/"
      linkImg="./public/TecImg.jpg"
    ></CardLink>
    <CardLink
      title="PORTAFOLIO"
      link="https://levit.ar/portfolio/"
      linkImg="./public/PortafolioImg.jpg"
    ></CardLink>
    <Card
      title="NOS ELIGEN"
      text="PERSONAS Y EMPRESAS CON PROYECTOS DE ALTO VUELO"
    ></Card>
    <CardLink
      title="SERVICIOS"
      link="https://levit.ar/portfolio/"
      linkImg="./public/ServiciosImg.jpg"
    ></CardLink>{" "}
    <CardLink
      title="CONTACTO"
      link="https://levit.ar/portfolio/"
      linkImg="./public/ContactoImg.jpg"
    ></CardLink>{" "}
    <CardLink
      title="
      COMPOSICIÓN
      PERSPECTIVA
      VOLUMEN"
      link="https://levit.ar/portfolio/"
      linkImg="./public/CompoImg2.jpeg"
    ></CardLink>
    <Footer></Footer>
  </React.StrictMode>
);