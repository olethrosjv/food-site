import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"



const Header = ({ siteTitle, menuLinks }) => (

  <header
    style={{
      background: 'black',
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '100%',
        padding: `1rem`,
      }}
    >

      <nav className='shift-right' style={{ paddingBottom: 0, marginBottom: 0 }}>
          <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `white`, textDecoration: `none` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> 
      </nav>

                

      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

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
