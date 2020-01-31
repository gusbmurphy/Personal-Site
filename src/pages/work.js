// import React from "react"
// // import Text from "../components/text"
// import styles from "./writings.module.css"
// import { Link } from "gatsby"
// import { graphql } from "gatsby"

// const WorkLink = ({ post }) => {
//   let tags = post.frontmatter.tags.map(tag => (
//     <span className={styles.tag} key={tag}>
//       {tag}
//     </span>
//   ))
//   return (
//     <div>
//       <li>
//         <Link to={post.frontmatter.path}>
//           {post.frontmatter.title} ({post.frontmatter.date})
//         </Link>
//         {tags}
//       </li>
//     </div>
//   )
// }

// export default ({
//   data: {
//     allMarkdownRemark: { edges },
//   },
// }) => {
//   edges.forEach(edge => {
//     console.log(edge.node.frontmatter.tags)
//   })
//   const Works = edges
//     // .filter(edge => edge.node.frontmatter.tags.contains("Red"))
//     .map(edge => <WorkLink key={edge.node.id} post={edge.node} />)
//   return (
//     <div>
//       <h1>Work</h1>
//       <ul>{Works}</ul>
//     </div>
//   )
// }

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             date(formatString: "MMMM, YYYY")
//             path
//             title
//             tags
//           }
//         }
//       }
//     }
//   }
// `