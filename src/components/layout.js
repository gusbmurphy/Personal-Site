import { Link } from "gatsby"
import React from "react"
// TODO: Consolidate all the CSS! (From modules, and from typography.js)
import * as styles from "../styles/layout.module.css"
import { Helmet } from "react-helmet"

const Menu = () => (
  <div className={styles.menu}>
    <div className={styles.menuLeft}>
      <div className={styles.name}>
        <Link to="/">Gus Murphy</Link>
      </div>
      <Link to="/work">Work</Link>
    </div>
  </div>
)

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: null,
    }
  }

  render() {
    return (
      <div style={{ width: `100%`, height: `100%`, margin: `auto` }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Gus Murphy</title>
          <script
            src="https://kit.fontawesome.com/1e86353b71.js"
            crossOrigin="anonymous"
          ></script>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
          ></link>
        </Helmet>
        <Menu />
        <div className={styles.pageContainer}>
          <div className={styles.content}>{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export { Layout as default }
