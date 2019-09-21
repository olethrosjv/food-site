import React from "react"
import { Link } from "gatsby"

const Button = () => (
    <div style={{ margin: '2em, 0, 2em, 0', padding: '2em, 0, 2em, 0'}}>
        <button id="myButton" type="button" onclick="">
           <Link to="./form-page" style={{ textDecoration: 'none', color: 'black' }}>
           Reserve a Table
           </Link>
        </button>    
    </div>
)



export default Button