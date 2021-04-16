import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { nord6 } from "../utils/color-scheme"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const AboutContainer = styled.div`
  max-width: 580px;
  line-height: 1.5em;
  font-size: 1.2em;

  p {
    text-align: center;
  }
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

const CurrentlyWorkingOnContainer = styled.div`
  font-style: italic;
  margin-top: 2em;
  text-align: center;
  max-width: 350px;
  font-size: 0.9em;
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
      <CurrentlyWorkingOnContainer>
        Currently, I&apos;m contributing to{" "}
        <a href="https://www.17lands.com/" target="_blank" rel="noreferrer">
          17Lands
        </a>{" "}
        and developing a mobile application with React Native to help{" "}
        <a
          href="https://www.youtube.com/watch?v=T1j1_aeK6WA"
          target="_blank"
          rel="noreferrer"
        >
          drummers
        </a>{" "}
        figure out what to practice.
      </CurrentlyWorkingOnContainer>
    </Container>
  )
}
