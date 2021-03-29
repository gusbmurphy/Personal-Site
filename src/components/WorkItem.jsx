import React from "react"
import { Link } from "gatsby"
import { Devicon } from "./Devicon"
import { FAIcon } from "./FAIcon"
import styled from "styled-components"

const MainContainer = styled.div`
  font-size: 0.9em;
  margin-bottom: 0.5em;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin-bottom: 0.4em;
    filter: drop-shadow(0 3px 0.3rem rgb(0 0 0 / 25%));
    margin-bottom: 0.7em;
  }
`

const IconsContainer = styled.div`
  font-size: 1.5em;
  display: flex;

  & > * {
    margin-right: 0.1em;
  }
`

const IconsDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 0.7em;
`

const Description = styled.p`
  margin-bottom: 0.4em;
  line-height: 1.3em;
`

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1em;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WorkItem = ({ post }) => {
  let links = post.frontmatter.links.map(link => (
    <li key={link.url}>
      <a target="_blank" rel="noopener noreferrer" href={link.url}>
        {link.display}
      </a>
    </li>
  ))

  let icons = []

  if (post.frontmatter.devicons) {
    post.frontmatter.devicons.map(devicon =>
      icons.push(
        <Devicon
          name={devicon.name}
          description={devicon.description}
          id={devicon.name + post.id}
        />
      )
    )
  }

  if (post.frontmatter.faIcons) {
    post.frontmatter.faIcons.map(faIcon =>
      icons.push(
        <FAIcon
          name={faIcon.name}
          description={faIcon.description}
          id={faIcon.name + post.id}
        />
      )
    )
  }

  return (
    <MainContainer>
      <TitleContainer>
        <h3>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          {post.frontmatter.backBurner && (
            <span>&nbsp;&#40;work in progress&#41;</span>
          )}
        </h3>
      </TitleContainer>
      <div>
        <div>
          <Link to={post.fields.slug}>
            <img src={post.frontmatter.previewImage} />
          </Link>
        </div>
        <div>
          <IconsDateContainer>
            <IconsContainer>{icons}</IconsContainer>
            {post.frontmatter.date}
          </IconsDateContainer>
          {/* <Description>{post.frontmatter.shortDesc}</Description>
          <LinksList>{links}</LinksList> */}
        </div>
      </div>
    </MainContainer>
  )
}
