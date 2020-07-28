import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../styles/workPage.module.css"
import Img from "gatsby-image"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  let tags = frontmatter.tags.map(tag => (
    <p className={styles.tag}>{tag}</p>
  ))
  let images = frontmatter.imageGallery.map(image => (
    <img src={image} />
  ))
  return (
    <div className={styles.mainContainer}>
      <div className={styles.media}>
        {images}
      </div>
      <div className={styles.text}>
        <p><h1 className={styles.title}>{frontmatter.title}</h1> {frontmatter.date}</p>
        <br/>
        {tags}
        <p><br/>{frontmatter.description}</p>
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