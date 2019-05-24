import React from "react"
import { Link } from "gatsby"

function Header() {
  return (
    <div>
      <h1>Alex Nielsen's Gatsby Page</h1>
      <ul style={{ listStyle: "none", display: "flex" }}>
        <li>
          <Link style={{ textDecoration: "none", padding: 5 }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", padding: 5 }} to="about">
            About
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", padding: 5 }} to="contact">
            Contact
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", padding: 5 }} to="blog">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
