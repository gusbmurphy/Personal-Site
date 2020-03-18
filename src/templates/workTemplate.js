import React from "react"
import { graphql } from "gatsby"
import styles from "../styles/writings.module.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  let tags = frontmatter.tags.map(tag => (
    <span className={styles.tag}>{tag}</span>
  ))
  return (
    <div className={styles.postContainer}>
      <div className={styles.post}>
        <div className={styles.header}>
        <h1 className={styles.title}>{frontmatter.title}</h1>
          <h4 className={styles.meta}>
            {frontmatter.date} {tags}
          </h4>
        </div>
  <div className={styles.previewImage}><img src={`../../${frontmatter.previewImage}`}/></div>
        <div className={styles.content}>{frontmatter.description}</div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query WorkByID($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { templateKey: { eq: "work" } }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        description
        previewImage
      }
    }
  }
`
