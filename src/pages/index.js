import React from "react"
import { graphql } from "gatsby"

export default function Home({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) {
  const { title, content } = blogs[0]
  return (
    <div>
      {title}
      <p>{content}</p>
      <p>Hello there</p>
    </div>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        id
        slug
        title
        content
      }
    }
  }
`
