import React from "react"
// import Text from "../components/text"
import styles from "./work.module.css"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const WorkLink = ({ post }) => {
  let tags = post.frontmatter.tags.map(tag => (
    <span className={styles.tag} key={tag}>
      {tag}
    </span>
  ))
  return (
    <div>
      <li>
        <Link to={post.fields.slug}>
          {post.frontmatter.title} ({post.frontmatter.date})
        </Link>
        {tags}
        <p className={styles.description}>
          {post.frontmatter.shortDesc}
        </p>
      </li>
    </div>
  )
}

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  edges.forEach(edge => {
    console.log(edge.node.frontmatter.tags)
  })
  const Works = edges
    // .filter(edge => edge.node.frontmatter.tags.contains("Red"))
    .map(edge => <WorkLink key={edge.node.id} post={edge.node} />)
  return (
    <div>
      <h1>Work</h1>
      <ul className={styles.workList}>{Works}</ul>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {fileAbsolutePath: {regex: "/content/work/.*\\\\.md$/"}}
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
          }
        }
      }
    }
  }
`