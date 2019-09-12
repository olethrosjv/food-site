import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Lunch Menu" />
    <h1>Lunch Menu</h1>
    
  <div style= {{ maxWidth: 600, margin: '2rem, 1rem'}}>
  <Image 
  alt="Professional Kitchen"
  />

    <div style= {{ display: 'inline'}}>
      <h2>Category</h2>
      <ul style= {{ display: 'inline'}}>
        <li>
          Item
        </li>
        <li>
          Item
        </li>
        <li>
          Item
        </li>
        <li>
          Item
        </li>
        <li>
          Item
        </li>
        <li>
          Item
        </li>
        <li>
          Item
        </li>
        <li>
          Item
        </li>
        <li>
          Item
        </li>
        
      </ul>
    </div>


  </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
