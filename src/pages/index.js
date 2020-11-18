import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import merakyCompleto from '../images/merakycompleto.png';
import Bienestar   from '../images/bienestar.png';
import Empleabilidad from '../images/empleabilidad.png';
import Orientacion from '../images/orientacion.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="homeMeraky">
      <div className="homeMeraky_title">
        <p>MERAKY</p>
        <p>CONSULTORÍA</p>
      </div>
      <div className="homeMeraky_paragraph">
        <p>Consultoría para el desarrollo humano con impacto social</p>
      </div>
    </section>
    <section className="homeMeraky_about">
      <div className="homeMeraky_leftAbout"></div>
      <div className="homeMeraky_rightAbout">
        <img className="homeMeraky_logo" src={merakyCompleto} alt="meraky logo" />
      </div>
      <p className="homeMeraky_pAbout">
        Acompañamos en todo el proceso de empleabilidad
      </p>
    </section>
    <section className="homeServices">
      <p className="homeServices_title">
        SERVICIOS
      </p>
      <div className="homeServices_content">
        <div className="homeServices_contentMain">
          <img className="homeServices_contentImg" src={Orientacion} alt="orientacion img" />
          <div className="homeServices_contentMessage">
            <p>Orientación Vocacional</p>
          </div>
        </div>
        <div className="homeServices_contentMain">
          <img className="homeServices_contentImg" src={Empleabilidad} alt="empleabilidad img" />
          <div className="homeServices_contentMessage">
            <p>Mejora tu potencial de empleabilidad</p>
          </div>
        </div>
        <div className="homeServices_contentMain">
          <img className="homeServices_contentImg" src={Bienestar} alt="bienestar img" />
          <div className="homeServices_contentMessage">
            <p>Programa de bienestar laboral</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
