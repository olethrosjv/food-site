import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class FormPage extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        guests: "",
        day: "",
        time: ""
    }
    
    handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

      handleSubmit = event => {
      event.preventDefault()
      alert(`Thank you ${this.state.firstName} ${this.state.lastName}! Your reservation has been made`)
      }

    render() {
    return (
  <Layout>
   <SEO title='form-page' />
    <form onSubmit={this.handleSubmit} style={{  maxHeight: 900, maxWidth: 1200, marginTop: '1em' }} method="post" netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="bot-field" />
    <label>
      First name
      <input             
        type="text"
        name="firstName"
        value={this.state.firstName}
        onChange={this.handleInputChange}
      />
    </label>
    <br></br>
    <label>
      Last name
      <input 
        type="text"
        name="lastName"
        value={this.state.lastName}
        onChange={this.handleInputChange}
      />
    </label>
    <br></br>
    <label>
      Number of Guests
      <input 
        type="number"
        name="guests"
        value={this.state.guests}
        onChange={this.handleInputChange}
      />
    </label>
    <br></br>
    <label>
      Day
      <input 
        type="date"
        name="day"
        value={this.state.day}
        onChange={this.handleInputChange}
      />
    </label>
    <br></br>
    <label>
      Time
      <input
        type="time"
        name="time"
        value={this.state.time}
        onChange={this.handleInputChange}
      />
    </label>
    <br></br>
    <button type="submit">Submit</button>
  </form>
  </Layout>

    )
    }
}
