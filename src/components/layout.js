/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  // change link in footer to portfolio once it is updated to gatsby site
// <aside><div style= {{ maxWidth: 300, marginLeft: '1rem', float: 'left'}}>This will be a side bar</div></aside>
  return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          //maxWidth: 1200,
          padding: `0px 1.2rem 1.5rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{ paddingTop: '1.5rem', marginTop: '1em' }}>
          © {new Date().getFullYear()}, Designed and Developed by 
          {` `}
          <a href="https://www.linkedin.com/in/joevaughn1/">Joe Vaughn</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  // change link in footer to portfolio once it is updated to gatsby site
// <aside><div style= {{ maxWidth: 300, marginLeft: '1rem', float: 'left'}}>This will be a side bar</div></aside>
  return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          //maxWidth: 1200,
          padding: `0px 1.2rem 1.5rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{ paddingTop: '1.5rem', marginTop: '1em' }}>
          © {new Date().getFullYear()}, Designed and Developed by 
          {` `}
          <a href="https://www.linkedin.com/in/joevaughn1/">Joe Vaughn</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
