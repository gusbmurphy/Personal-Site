import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/writings.module.css"

const PostLink = ({ post }) => {
  console.log(`"tag" class name in 'post-link.js': ${styles.tag}`)
  let tags = post.frontmatter.tags.map(tag => (
    <span className={styles.tag} key={tag}>{tag}</span>
  ))
  return (
    <div>
      <Link to={post.path}>
        {post.frontmatter.title} ({post.frontmatter.date})
      </Link>
      {tags}
    </div>
  )
}

export default PostLink
