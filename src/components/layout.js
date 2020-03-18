import React, { Fragment } from "react"
import { Link } from "gatsby"

import styles from "../styles/layout.module.css"
import ColorScheme from "../utils/colorscheme"

import ReactDynamicComponent from "react-dynamic-import"

import Media from "react-media"
import Headroom from "react-headroom"

const artLoader = () => import("./bg-art")
const Art = ReactDynamicComponent({
  loader: artLoader,
})

const ListLink = props => (
  <li>
    <Link to={props.to} className={styles.hvrSweepToLeft}>
      {props.children}
    </Link>
  </li>
)

const Menu = () => (
  <div className={styles.menu}>
    <Link to="/">
      <h1 className={styles.name}>Gus Murphy</h1>
    </Link>
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

const Topbar = () => (
  <Headroom>
    <h1>Hello from Headroom!</h1>
  </Headroom>
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
      <div style={{ position: `relative`, width: `100%`, height: `100%` }}>
        <div className={styles.mainGrid}>
          <Media
            queries={{
              small: "(max-width: 1099px)",
              large: "(min-width: 1100px)",
            }}
          >
            {matches => (
              <Fragment>
                {matches.small && (
                  <Headroom
                    style={{
                      margin: "auto"
                    }}
                  >
                    <Menu />
                  </Headroom>
                )}
                {matches.large && <Menu />}
              </Fragment>
            )}
          </Media>
          <div className={styles.content}>{this.props.children}</div>
        </div>
        <div className={styles.bgArt}>
          <Art
            name="pts_anim"
            background={ColorScheme.background}
            pause="false"
            style={{ height: "100%" }}
          />
        </div>
      </div>
    )
  }
}

export { Layout as default }
