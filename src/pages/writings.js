import React from "react"
import Text from "../components/text"
import styles from "../styles/writings.module.css"
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
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link> ({post.frontmatter.date}){tags}
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
  const Posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))
  return (
    <Text>
      <div className={styles.contentSummary}>
        I occasionally write, mostly about video games unfortunately!
      </div>
      <ul className={styles.postsList}>{Posts}</ul>
    </Text>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/content/writing/.*\\\\.md$/" } }
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
