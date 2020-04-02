import React from "react"
// import Text from "../components/text"
import styles from "../styles/work.module.css"
import { Link, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"

const WorkItem = ({ post }) => {
  let tags = post.frontmatter.tags.map(tag => (
    <span className={styles.tag} key={tag}>
      {tag}
    </span>
  ))
  return (
    <div className={`${styles.workGridItem} ${styles.hvrGrowShadow}`}>
      <Link to={post.fields.slug}>
        <img src={`../../${post.frontmatter.previewImage}`} />
        <div className={styles.workItemTransparency}></div>
        <div className={styles.workTitle}>{post.frontmatter.title}</div>
        <div className={styles.tagsCollection}>{tags}</div>
      </Link>
    </div>
  )
}

export default ({
  data: {
    allMarkdownRemark: { edges: allMarkdown },
  },
}) => {
  const works = allMarkdown.map(markdown => (
    <WorkItem key={markdown.node.id} post={markdown.node} />
  ))
  return (
    <div style={{ textAlign: `center` }}>
      <div className={styles.contentSummary}>
        A collection of some (un)finished projects.
      </div>
      <div className={styles.workGrid}>{works}</div>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/content/work/.*\\\\.md$/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM, YYYY")
            title
            shortDesc
            tags
            previewImage
          }
        }
      }
    }
  }
`
