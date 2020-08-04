import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../styles/workPage.module.css"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown/with-html"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  // let tags = frontmatter.tags.map(tag => (
  //   <p className={styles.tag}>{tag}</p>
  // ))
  let tags = ""
  frontmatter.tags.forEach((tag, index) => {
    tags += tag
    if (index != (frontmatter.tags.length - 1)) tags += " / "
  })
  let images = frontmatter.imageGallery.map(image => (
    <img src={image} />
  ))
  let links = frontmatter.links.map(link => (
    <li>
      <a target="_blank" rel="noopener noreferrer" href={link.url}>{link.display}</a>
    </li>
  ))
  return (
    <div className={styles.mainContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <div>{tags}</div>
        <div>{frontmatter.date}</div>
        <ul className={styles.linkList}>{links}</ul>
        <br/><p className={styles.description}><ReactMarkdown source={frontmatter.description}/></p>
      </div>
      <div className={styles.media}>
        {images}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query WorkByID($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { templateKey: { eq: "work" } }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM, YYYY")
        title
        tags
        description
        imageGallery
        links {
          display
          url
        }
      }
    }
  }
`


// file(relativePath: {eq: "google-game-builder.jpg"}) {
//   childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }