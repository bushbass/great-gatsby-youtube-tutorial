import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

function About() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        I was a professional web developer a few years back. Then I wasn't for a
        while. Now I'm doing whatever it takes to get back into the field.
      </p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default About
