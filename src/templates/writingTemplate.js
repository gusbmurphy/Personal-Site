import React from "react"
import { graphql } from "gatsby"
import * as styles from "../styles/writings.module.css"
import Text from "../components/text.js"

function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  let tags = frontmatter.tags.map((tag, i) => (
    <span className={styles.tag} key={i}>{tag}</span>
  ))
  return (
    <Text>
      <div className={styles.post}>
        <div className={styles.header}>
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <div className={styles.meta}>
            {frontmatter.date} {tags}
          </div>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Text>
  )
}

export default Template

export const pageQuery = graphql`
  query WritingByID($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { templateKey: { eq: "writing" } }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`
