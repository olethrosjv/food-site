import React from "react"

import { Link } from "gatsby"

import About from "../components/About"
import Layout from "../components/layout"
import Image from "../components/image"
import Menu from "../components/menu"
/***** import { isNullOrUndefined } from "util" --------------- Not sure what this is supposed to do*/
import SEO from "../components/seo"
import Button from "../components/button"

const IndexPage = () => (
 
  <>
  <Layout>
  <SEO title="Home" />
  <div style= {{ maxHeight: 350, maxWidth: 600, margin: '2rem, 1rem'}}>
  <Image />
    
  </div>
  
  <About />
      
  <Menu />
 
  <Button />

  <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  
  </>
)
export default IndexPage

