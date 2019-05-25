import React from "react"
import { graphql, useStaticQuery } from "gatsby"

function Footer() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <hr />
      <p>Created by {data.site.siteMetadata.author} </p>
    </footer>
  )
}

export default Footer
