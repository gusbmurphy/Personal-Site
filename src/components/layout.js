import React, { Suspense } from "react"
import { Link } from "gatsby"

import styles from "./layout.module.css"
import ColorScheme from "../utils/colorscheme"

const Art = React.lazy(() => import("./bg-art")) 

const ListLink = props => (
  <li>
    <Link to={props.to} className={styles.hvrSweepToLeft}>
      {props.children}
    </Link>
  </li>
)

const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles.imprint}>
      <Link to="/">
        <p className={styles.imprintFirstName}>Gus</p>
        <p className={styles.imprintLastName}>Murphy</p>
      </Link>
    </div>
    <div className={styles.links}>
      <ul>
        <ListLink to="/work/">Work</ListLink>
        <ListLink to="/writings/">Writings</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/bananas/">Bananas</ListLink>
        <ListLink to="/school-time/">School Time</ListLink>
        <ListLink to="/the-hospital/">The Hospital</ListLink>
      </ul>
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
    console.log("Hello from cDM!")
    return (
      <div style={{ position: `relative`, width: `100%`, height: `100%` }}>
        <div>
          <Sidebar />
          <div className={styles.content}>{this.props.children}</div>
        </div>
        {/* This div is styled here for the background art. */}
        <div
          style={{
            position: `fixed`,
            top: 0,
            left: 0,
            zIndex: -100,
            width: `100%`,
            height: `100%`,
          }}
        >
          <Suspense fallback={null}>
            <Art
              name="pts_anim"
              background={ColorScheme.background}
              pause="false"
              style={{ height: "100%" }}
            />
          </Suspense>
        </div>
      </div>
    )
  }
}

export { Layout as default }