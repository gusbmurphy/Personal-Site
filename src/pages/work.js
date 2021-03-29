import React from "react"
import { graphql } from "gatsby"
import { WorkItem } from "../components/WorkItem"
import styled from "styled-components"

const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  & > div {
    width: 40%;
  }
`

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
    <WorksContainer>
      {works}
      {wips}
    </WorksContainer>
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
