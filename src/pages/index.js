import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const HeadShot = styled(Img)`
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
`

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <HeadShot fixed={data.file.childImageSharp.fixed} />
      <p>
        Gus Murphy lives in the Twin Cities. He is a musician, playing trombone
        and bass, and knows the correct way to slice pizza. Gus is currently
        looking for work in web development—you can find him on{" "}
        <a
          href="https://www.linkedin.com/in/augustus-murphy-47b8b8193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/gusbmurphy"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </>
  )
}
