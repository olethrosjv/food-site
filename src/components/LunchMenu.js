import React from "react"
import "./layout.css"
import { Link } from "gatsby"


const LunchMenu = () => (
    
  

    <section  style={{ margin: '2em, 1em', padding: '2em' }}>
      <h1>Lunch Menu</h1>
      <ul className="section group">
        <li className="col span_1_of_3">
            <Link to="" style={{ color: `black`, textDecoration: `none` }}>Starters</Link>      
        </li>
        <li className="col span_1_of_3">
            <Link to="" style={{ color: `black`, textDecoration: `none` }}>Sandwiches</Link>         
        </li>         
        <li className="col span_1_of_3">
            <Link to="" style={{ color: `black`, textDecoration: `none` }}>Salads</Link>         
        </li>
      </ul>                    
    </section>
  )

export default LunchMenu
