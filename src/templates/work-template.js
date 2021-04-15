import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown/with-html"
import styled from "styled-components"
import { FAIcon } from "../components/FAIcon"
import { Devicon } from "../components/Devicon"

function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  let icons = []
  if (frontmatter.devicons) {
    frontmatter.devicons.map(devicon =>
      icons.push(
        <IconContainer>
          <Devicon
            name={devicon.name}
            description={devicon.description}
            id={devicon.name + markdownRemark.id}
          />
        </IconContainer>
      )
    )
  }
  if (frontmatter.faIcons) {
    frontmatter.faIcons.map(faIcon =>
      icons.push(
        <IconContainer>
          <FAIcon
            name={faIcon.name}
            description={faIcon.description}
            id={faIcon.name + markdownRemark.id}
          />
        </IconContainer>
      )
    )
  }

  let images = frontmatter.imageGallery.map(image => (
    <StyledImage src={image} key={image + markdownRemark.id} />
  ))

  let links = frontmatter.links.map(link => (
    <li key={link.display + markdownRemark.id}>
      <a target="_blank" rel="noopener noreferrer" href={link.url}>
        {link.display}
      </a>
    </li>
  ))

  return (
    <MainContainer>
      <TextContainer>
        <Title>{frontmatter.title}</Title>
        <IconDateContainer>
          <DateContainer>{frontmatter.date}</DateContainer>
          {icons}
        </IconDateContainer>
        <LinkList>{links}</LinkList>
        <DescriptionContainer>
          <ReactMarkdown source={frontmatter.description} />
        </DescriptionContainer>
      </TextContainer>
      <ImagesContainer>{images}</ImagesContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
`

const TextContainer = styled.div`
  flex: 3;
  padding-right: 2em;
`

const ImagesContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  & > ${StyledImage}:not(:last-child) {
    margin-bottom: 1em;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  filter: drop-shadow(0 3px 0.3rem rgb(0 0 0 / 25%));
`

const LinkList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0.1em;
  margin-bottom: 0.75em;
  display: flex;
  flex-direction: row;

  & > li:not(:last-child) {
    margin-right: 0.5em;
  }
`

const Title = styled.h1`
  margin-bottom: 0.2em;
`

const IconDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.2em;
  align-items: center;
`

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.3em;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.1em;
`

const DescriptionContainer = styled.div`
  font-size: 1em;
  line-height: 1.4em;
  margin-bottom: 1em;

  & > p:not(:last-child) {
    margin-bottom: 0.8em;
  }

  ul {
    padding-left: 1.2em;

    li:not(:last-child) {
      margin-bottom: 0.2em;
    }
  }
`

export default Template

export const pageQuery = graphql`
  query WorkByID($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { templateKey: { eq: "work" } }
    ) {
      id
      frontmatter {
        date(formatString: "MMMM, YYYY")
        title
        tags
        description
        imageGallery
        links {
          display
          url
        }
        devicons {
          name
          description
        }
        faIcons {
          name
          description
        }
      }
    }
  }
`
