import React, { Fragment } from "react"
import { Link } from "gatsby"

import styles from "../styles/layout.module.css"
import ColorScheme from "../utils/colorscheme"

import ReactDynamicComponent from "react-dynamic-import"

import Media from "react-media"
import Headroom from "react-headroom"

import {FaCodepen, FaGithub} from "react-icons/fa"

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
    <div className={styles.menuContent}>
      <Link to="/">
        <h1 className={styles.name}>GUS MURPHY</h1>
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
  </div>
)

const InfoBar = () => (
  <div className={styles.infoBar}>
    <p style={{textAlign: `center`}}>Latest Activity</p>
    <ul style={{listStyle: `none`}}>
    <li><FaCodepen/> Codepen: <i>2 days ago</i></li>
    <li><FaGithub/> Github: <i>2h 34m ago</i></li>
    </ul>
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
      <div style={{ width: `100%`, height: `100%`, margin: `auto` }}>
        {/* <div className={styles.mainGrid}> */}
        {/* <Media
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
                    margin: "auto",
                  }}
                >
                  <Menu />
                </Headroom>
              )}
              {matches.large && <Menu />}
            </Fragment>
          )}
        </Media> */}
        <Menu/>
        <div className={styles.pageContainer}>
          <div className={styles.content}>{this.props.children}</div>
          {/* <InfoBar/> */}
        </div>
        {/* </div> */}
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
