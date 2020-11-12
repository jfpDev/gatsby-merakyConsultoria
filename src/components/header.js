import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './layout.css';

import MerakyLogo from '../images/merakylogo.png';

const Header = ({ siteTitle }) => (
  <header>
    <div className="Header">
      <Link className="HeaderLogo" to="/">
        <img className="headerLogo_img" src={MerakyLogo} alt="meraky logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link className="HeaderNavs" to="/page-2">Equipo</Link>
          </li>
          <li>
            <Link className="HeaderNavs" to="/page-2">Contacto</Link>
          </li>
          <li>
            <Link className="HeaderNavs" to="/page-2">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
