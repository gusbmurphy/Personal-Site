import React, { Fragment } from "react"
import Media from "react-media"
// import Text from "../components/text"
import styles from "../styles/work.module.css"
import { Link, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"

const WorkItem = ({ post }) => {
  let tags = ""
  post.frontmatter.tags.forEach((tag, index) => {
    tags += tag
    if (index != (post.frontmatter.tags.length - 1)) tags += " / "
  })

  let links = post.frontmatter.links.map(link => (
    <li>
      <a target="_blank" rel="noopener noreferrer" href={link.url}>{link.display}</a>
    </li>
  ))

  let image = post.frontmatter.previewImage
  return (
    <div className={styles.workGridItem}>
      <Link to={post.fields.slug} className={styles.workGridItemImg}>
        <img src={image} />
      </Link>
      <div className={styles.workGridItemInfo}>
        <h3>{post.frontmatter.title}</h3>
        <ul className={styles.tagsCollection}>{tags}</ul>
        {post.frontmatter.date}
        <br></br>
        <ul className={styles.linksCollection}>{links}</ul>
        <br></br>
        <div className={styles.workGridItemDesc}>
          {post.frontmatter.shortDesc}
        </div>
      </div>
      {/* <div className={styles.workGridItemEnd}>
        <br></br>
      </div> */}
    </div>
  )
}

// const MobileWorkItem = ({ post }) => {
//   let tags = post.frontmatter.tags.map(tag => (
//     <li className={styles.tag} key={tag}>
//       {tag}
//     </li>
//   ))
//   return (
//     <div className={styles.workGridItem}>
//       <Link to={post.fields.slug} className={styles.workGridItemImg}>
//         <img src={post.frontmatter.previewImage} />
//       </Link>
//       <div className={styles.workGridItemInfo}>
//         <h2>{post.frontmatter.title}</h2>
//         {post.frontmatter.date}
//         <br></br>
//         <ul className={styles.tagsCollection}>{tags}</ul>
//       </div>
//     </div>
//   )
// }

export default ({
  data: {
    allMarkdownRemark: { edges: allMarkdown },
  },
}) => {
  const works = allMarkdown.map(markdown => (
    // <Media
    //   queries={{
    //     mobile: "(max-width: 499px)",
    //   }}
    // >
    //   {matches => (
    //     <Fragment>
    //       {matches.mobile && (
    //         <MobileWorkItem key={markdown.node.id} post={markdown.node} />
    //       )}
    //       {!matches.mobile && (
            <WorkItem key={markdown.node.id} post={markdown.node} />
    //       )}
    //     </Fragment>
    //   )}
    // </Media>
  ))
  return (
    <div style={{ textAlign: `center` }}>
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
