import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import merakyLogo from '../images/merakylogo.png';

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
        <img className="homeMeraky_logo" src={merakyLogo} alt="meraky logo" />
      </div>
      <p className="homeMeraky_pAbout">
        Acompañamos en todo el proceso de empleabilidad
      </p>
    </section>
  </Layout>
)

export default IndexPage
