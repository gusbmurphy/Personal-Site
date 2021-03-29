import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const AboutContainer = styled.div`
  max-width: 560px;
  line-height: 1.5em;
  font-size: 1.2em;
`

const HeadShotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
`

const HeadShot = styled(Img)`
  border-radius: 50%;
  filter: drop-shadow(0 8px 0.75rem rgb(0 0 0 / 25%));
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
    <Container>
      <AboutContainer>
        <HeadShotContainer>
          <HeadShot fixed={data.file.childImageSharp.fixed} />
        </HeadShotContainer>
        <p>
          Waving hand emoji! My name is Gus, I&apos;m a code writer and trombone
          player. I live in the Twin Cities currently, where I&apos;ve learned{" "}
          <a
            href="https://en.wikipedia.org/wiki/Square"
            target="_blank"
            rel="noreferrer"
          >
            the correct way to slice pizza
          </a>{" "}
          . My favorite type of program to write is &quot;done&quot;, but
          I&apos;ve gotten really good at other not &quot;done&quot;-types too.
        </p>
      </AboutContainer>
    </Container>
  )
}
