import React from "react"
import styles from "../styles/work.module.css"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const WorkItem = ({ post }) => {
  console.log(post)
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

  let icons = []

  // const Devicon = ({ name, description }) => {
  //   return <i className={name} title={description}></i>
  // }
  // post.frontmatter.devicons.map(devicon =>
  //   icons.push(
  //     <Devicon name={devicon.name} description={devicon.description} />
  //   )
  // )

  // const FAIcon = ({ name, description }) => {
  //   return <i className={name} title={description}></i>
  // }
  // post.frontmatter.faIcons.map(faIcon =>
  //   icons.push(
  //     <FAIcon name={faIcon.name} description={faIcon.description} />
  //   )
  // )

  let image = post.frontmatter.previewImage
  return (
    <div className={styles.individualContainer}>
      <div className={styles.imageContainer}>
        <Link to={post.fields.slug}>
          <img src={image} />
        </Link>
      </div>
      <div className={styles.descriptionContainer}>
        <h3>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </h3>
        <div>{tags}</div>
        <div>{icons}</div>
        {post.frontmatter.date}
        <br></br>
        <ul className={styles.links}>{links}</ul>
        <br></br>
        {post.frontmatter.shortDesc}
      </div>
    </div>
  )
}

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
      <div className={styles.mainContainer}>{works}</div>
      <div className={styles.wipWarning}>
        <h3>Entering the WIP Zone</h3>
        <p>Please be kind.</p>
      </div>
      <div className={styles.mainContainer}>{wips}</div>
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
