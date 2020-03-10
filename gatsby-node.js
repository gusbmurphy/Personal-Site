const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: `pages` })
    console.log(`Creating node with path ${value}, title: ${node.frontmatter.title}, templateKey: ${node.frontmatter.templateKey}`)
    createNodeField({
      node,
      name: `slug`,
      value: value,
    })
  }

  // if (node.internal.type === `MarkdownRemark`) {
  //   const fileNode = getNode(node.parent)
  //   console.log(`\n`, fileNode.relativePath)
  // }
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/${String(node.frontmatter.templateKey)}Template.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   // const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
//   const workTemplate = path.resolve(`src/templates/workTemplate.js`)
//   const writingTemplate = path.resolve(`src/templates/writingTemplate.js`)

//   // Get writing pages
//   let result = await graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         filter: { fileAbsolutePath: { regex: "/content/writing/.*\\\\.md$/" } }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `)

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: writingTemplate,
//       context: {}, // additional data can be passed via context
//     })
//   })
// }
//   // Get work pages
//   result = await graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         filter: {fileAbsolutePath: {regex: "/content/work/.*\\\\.md$/"}}
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `)

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: workTemplate,
//       context: {}, // additional data can be passed via context
//     })
//   })
// }
