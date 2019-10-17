import React from "react"

//import { Link } from "gatsby"

import About from "../components/About"
import Layout from "../components/layout"
import Image from "../components/image"
import Menu from "../components/menu"
import SEO from "../components/seo"
import Button from "../components/button"

const IndexPage = () => (
 
  <>
  <Layout>
  <SEO title="Home" />
  <div style= {{ maxHeight: 350, maxWidth: 600, margin: '1rem, 1rem'}}>
  
  <Image alt="Professional Kitchen"/>

  </div>
  
  <h2>About</h2>

  <About />

      
  <Menu />
 

  <Button />

  </Layout>
  
  </>
)
export default IndexPage

