import React from "react"
import { Link } from "gatsby"
import { Devicon } from "./Devicon"
import { FAIcon } from "./FAIcon"
import * as styles from "../styles/work.module.css"

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

  let image = post.frontmatter.previewImage
  return (
    <div className={styles.individualContainer}>
      <h3>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        {post.frontmatter.backBurner && (
          <span className={styles.wipWarning}>
            &nbsp;&#40;work in progress&#41;
          </span>
        )}
      </h3>
      <div className={styles.imageDescContainer}>
        <div className={styles.imageContainer}>
          <Link to={post.fields.slug}>
            <img src={image} />
          </Link>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.icons}>{icons}</div>
          {post.frontmatter.date}
          <br></br>
          <ul className={styles.links}>{links}</ul>
          <br></br>
          {post.frontmatter.shortDesc}
        </div>
      </div>
    </div>
  )
}
