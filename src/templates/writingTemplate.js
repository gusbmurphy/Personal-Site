import React from "react"
import { graphql } from "gatsby"
import styles from "../pages/writings.module.css"

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
          <h1 className={styles.title}>
            {frontmatter.title}
            <h4 className={styles.meta}>
              {frontmatter.date} {tags}
            </h4>
          </h1>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
