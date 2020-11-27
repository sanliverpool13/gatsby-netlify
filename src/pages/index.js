import React from "react"
import { graphql } from "gatsby"

console.log(process.env.NODE_ENV)

export default function Home({
  data: {
    allStrapiWorks: { nodes: works },
  },
}) {
  const { title, content } = works[0]
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
    allStrapiWorks {
      nodes {
        id
        slug
        title
        content
      }
    }
  }
`
