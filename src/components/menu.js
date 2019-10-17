import React from "react"
import "./layout.css"
import { Link } from "gatsby"


const Menu = () => (
    
    <section id='menu' style={{ margin: '2em, 1em', padding: '2em' }}>
      <h2>Menu</h2>
      <ul className="section group">
        <li className="col span_1_of_3">
            <Link to="./menu-page" style={{ color: `black`, textDecoration: `none` }}>Lunch</Link>      
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
