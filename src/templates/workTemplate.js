import React from "react"
import { graphql } from "gatsby"
import styles from "../styles/workPage.module.css"
import ReactMarkdown from "react-markdown/with-html"
import { FAIcon, Devicon } from "../pages/work"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  let icons = []
  if (frontmatter.devicons) {
    frontmatter.devicons.map(devicon =>
      icons.push(
        <Devicon
          name={devicon.name}
          description={devicon.description}
          id={devicon.name + markdownRemark.id}
        />
      )
    )
  }
  if (frontmatter.faIcons) {
    frontmatter.faIcons.map(faIcon =>
      icons.push(
        <FAIcon
          name={faIcon.name}
          description={faIcon.description}
          id={faIcon.name + markdownRemark.id}
        />
      )
    )
  }

  let images = frontmatter.imageGallery.map(image => (
    <img src={image} key={image + markdownRemark.id} />
  ))

  let links = frontmatter.links.map(link => (
    <li key={link.display + markdownRemark.id}>
      <a target="_blank" rel="noopener noreferrer" href={link.url}>
        {link.display}
      </a>
    </li>
  ))

  return (
    <div className={styles.mainContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <div className={styles.icons}>{icons}</div>
        <div className={styles.date}>{frontmatter.date}</div>
        <ul className={styles.linkList}>{links}</ul>
        <p className={styles.description}>
          <ReactMarkdown source={frontmatter.description} />
        </p>
      </div>
      <div className={styles.media}>{images}</div>
    </div>
  )
}

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
