/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import Instagram from '../images/instagram.png';
import Facebook  from '../images/facebook.png';

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <div>
        <main>{children}</main>
        <footer>
          <div className="footer_title">
            <p>Sigue nuestras redes sociales</p>
          </div>
          <div className="footer_icons">
            <a href="https://www.instagram.com/merakyconsultoria/"><img className="footer_imgs" src={Instagram} alt="instagram img" /></a>
            <a href="https://www.facebook.com/merakyconsultoria/"><img className="footer_imgs" src={Facebook} alt="facebook img" /></a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
