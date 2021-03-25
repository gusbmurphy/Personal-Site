import React from "react"
import { Link } from "gatsby"
import { Devicon } from "./Devicon"
import { FAIcon } from "./FAIcon"
import styled from "styled-components"

const MainContainer = styled.div`
  font-size: 0.85em;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const Description = styled.p`
  line-height: 1.3em;
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
      <h3>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        {post.frontmatter.backBurner && (
          <span>&nbsp;&#40;work in progress&#41;</span>
        )}
      </h3>
      <div>
        <div>
          <Link to={post.fields.slug}>
            <img src={post.frontmatter.previewImage} />
          </Link>
        </div>
        <div>
          <div>{icons}</div>
          {post.frontmatter.date}
          <br></br>
          <ul>{links}</ul>
          <br></br>
          <Description>{post.frontmatter.shortDesc}</Description>
        </div>
      </div>
    </MainContainer>
  )
}
