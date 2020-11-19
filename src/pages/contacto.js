import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Contact from '../images/contacto.png';

const SecondPage = () => (
  <Layout>
    <SEO title="Contacto" />
    <section className="contactInfo">
      <img className="contactInfo_img" src={Contact} alt="meraky logo" />
      <div className="contactInfo_bottom"></div>
      <div className="contactInfo_content">
        <p className="contactInfo_contentTitle">
          CONTÁCTANOS
        </p>
        <div className="contactInfo_contentInfo">
          <p className="contactInfo_contentInfo_title">
            Correo electrónico
          </p>
          <p className="contactInfo_contentInfo_text">
            enlacemeraki2020@gmail.com
          </p>
        </div>
        <div className="contactInfo_contentInfo">
          <p className="contactInfo_contentInfo_title">
            Teléfono/Whatsapp
          </p>
          <p className="contactInfo_contentInfo_text">
            (0057) 305 812 8286
          </p>
        </div>
        <div className="contactInfo_contentInfo">
          <p className="contactInfo_contentInfo_title">
            Instagram/Facebook
          </p>
          <p className="contactInfo_contentInfo_text">
            @merakyconsultoria
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
