import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi, I'm Alex.</h1>
    <h2>I'm a fullstack web developer from Sparta, NJ</h2>
    <p>
      Need a developer? <Link to="/contact">Contact me</Link>
    </p>
  </Layout>
)

export default IndexPage
