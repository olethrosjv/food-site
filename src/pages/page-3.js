import React from "react"
import { Link } from "gatsby"


const ThirdPage = () => (
    <main>
        This is the third page.<br/>
        <Link to="/">Go back to the homepage</Link><br/>
        <Link to="/page-2">Go to page 2</Link><br/>
        <a href="https://joe-vaughn-portfolio.netlify.com/">Portfolio</a>
    </main>
)

export default ThirdPage