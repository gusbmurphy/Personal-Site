import React from "react"
import styles from "../styles/work.module.css"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const WorkItem = ({ post }) => {
  let tags = ""
  post.frontmatter.tags.forEach((tag, index) => {
    tags += tag
    if (index != post.frontmatter.tags.length - 1) tags += " / "
  })

  let links = post.frontmatter.links.map(link => (
    <li key={link.url}>
      <a target="_blank" rel="noopener noreferrer" href={link.url}>
        {link.display}
      </a>
    </li>
  ))

  let image = post.frontmatter.previewImage
  return (
    <div className={styles.workGridItem}>
      <Link to={post.fields.slug} className={styles.workGridItemImg}>
        <img src={image} />
      </Link>
      <div className={styles.workGridItemInfo}>
        <h3>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </h3>
        <div>{tags}</div>
        {post.frontmatter.date}
        <br></br>
        <ul className={styles.linksCollection}>{links}</ul>
        <br></br>
        <div className={styles.workGridItemDesc}>
          {post.frontmatter.shortDesc}
        </div>
      </div>
    </div>
  )
}

const WorkPage = ({
  data: {
    allMarkdownRemark: { edges: allMarkdown },
  },
}) => {
  let works = [];
  let worksInProgress = [];
  allMarkdown.forEach(markdown => {
    const workItem = <WorkItem key={markdown.node.id} post={markdown.node} />
    if (markdown.node.frontmatter.backBurner) worksInProgress.push(workItem)
    else works.push(workItem)
  })

  return (
    <div style={{ textAlign: `center` }}>
      <div className={styles.workGrid}>{works}</div>
      <h1 className={styles.backBurnerHeader}>On the back burner... ♨️♨️♨️</h1>
      <div className={styles.workGrid}>{worksInProgress}</div>
    </div>
  )
}
export default WorkPage

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
            backBurner
            date(formatString: "MMMM, YYYY")
            title
            shortDesc
            tags
            previewImage
            links {
              display
              url
            }
          }
        }
      }
    }
  }
`
