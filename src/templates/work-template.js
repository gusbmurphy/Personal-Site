import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown/with-html"
import { FAIcon } from "../components/FAIcon"
import { Devicon } from "../components/Devicon"
import {
  TextContainer,
  MainContainer,
  ImagesContainer,
  StyledImage,
  LinkList,
  Title,
  IconDateContainer,
  DateContainer,
  IconContainer,
  DescriptionContainer,
} from "../styles/work-template"

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
