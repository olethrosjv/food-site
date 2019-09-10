import React from "react"
import "./layout.css"
import { Link } from "gatsby"


const Menu = () => (
    
    <section id='menu'>
      <h2>Menu</h2>
      <ul className="section group">
        <li className="col span_1_of_3">
            <Link to="" style={{ color: `black`, textDecoration: `none` }}>Lunch</Link>      
        </li>
        <li className="col span_1_of_3">
            <Link to="" style={{ color: `black`, textDecoration: `none` }}>Dinner</Link>         
        </li>         
        <li className="col span_1_of_3">
            <Link to="" style={{ color: `black`, textDecoration: `none` }}>Happy Hour</Link>         
        </li>
      </ul>                    
    </section>
  )

export default Menu
