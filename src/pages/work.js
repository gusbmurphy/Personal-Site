import React from "react"
import { graphql } from "gatsby"
import * as styles from "../styles/work.module.css"
import { WorkItem } from "../components/WorkItem"

const WorkPage = ({
  data: {
    allMarkdownRemark: { edges: allMarkdown },
  },
}) => {
  let works = []
  let wips = []
  allMarkdown.forEach(markdown => {
    const workItem = <WorkItem key={markdown.node.id} post={markdown.node} />
    if (markdown.node.frontmatter.backBurner) wips.push(workItem)
    else works.push(workItem)
  })

  return (
    <div style={{ textAlign: `center` }}>
      <div className={styles.mainContainer}>{works}{wips}</div>
    </div>
  )
}

export default WorkPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/content/work/.*\\.md$/" } }
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
    }
  }
`
