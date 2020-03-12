import React from "react"
// import Text from "../components/text"
import styles from "./work.module.css"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const WorkItem = ({ post }) => {
  let tags = post.frontmatter.tags.map(tag => (
    <span className={styles.tag} key={tag}>
      {tag}
    </span>
  ))
  return (
    <div className={styles.workGridItem}>
      <Link to={post.fields.slug}><img src={`../../${post.frontmatter.previewImage}`}/></Link>
      <div className={styles.title}>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link> (
        {post.frontmatter.date})
      </div>
      <div className={styles.tagsCollection}>{tags}</div>
      <p className={styles.description}>{post.frontmatter.shortDesc}</p>
    </div>
  )
}

export default ({
  data: {
    allMarkdownRemark: { edges: allMarkdown }
  },
}) => {
  const Works = allMarkdown.map(markdown => (
    <WorkItem key={markdown.node.id} post={markdown.node} />
  ))
  return (
    <div>
      <h1>Work</h1>
      <div className={styles.workGrid}>{Works}</div>
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
