import React from "react"
import Text from "../components/text"
import styles from "./writings.module.css"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const PostLink = ({ post }) => {
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
  const Posts = edges
    // .filter(edge => edge.node.frontmatter.tags.contains("Red"))
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <div>
      <h1>Writings</h1>
      <ul className={styles.postsList}>{Posts}</ul>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {fileAbsolutePath: {regex: "/content/writing/.*\\\\.md$/"}}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
