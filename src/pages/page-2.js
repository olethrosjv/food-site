import React from "react"
//import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LunchMenu from "../components/LunchMenu"
import Button from "../components/button"


const SecondPage = () => (
  <Layout>
  <SEO title="Lunch Menu" />
    
  <div style= {{ maxWidth: 600, margin: '2rem, 1rem'}}>
  <Image alt="Professional Kitchen"/>

  </div>

  
 
  <LunchMenu/>  
 
  

  <Button />

  

    
  </Layout>
)
//<Link to="/">Go back to the homepage</Link>
export default SecondPage
