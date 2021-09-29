import React from "react";
import "./styles/Footer.css"
const PieDePagina = () => {
  return <footer className="Footer">





    <p className="Parrafo"> Todos los derechos reservados 2003-2021. República Argentina.INCAA<br></br>
      Lima 319; Código Postal: C1073AAG, CABA; República Argentina.</p>

    <div className="FooterIMG">
      <div className="logof"><a href="/">
        <img src="http://cine.ar/img/logo-cinear.svg" alt="" /></a></div>

      <div className="logof"><a href="/" >
        <img src="http://cine.ar/img/logo-arsat.svg" alt="" /></a></div>

      <div className="logof"><a href="/">
        <img src="http://cine.ar/img/logo-incaa.svg" alt="" /></a></div>
    </div>


  </footer>;

};

export default PieDePagina;
