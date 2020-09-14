import { Link } from "gatsby"
import React from "react"
import ReactDynamicComponent from "react-dynamic-import"
import { FaCodepen, FaGithub, FaTwitter } from "react-icons/fa"
// TODO: Consolidate all the CSS! (From modules, and from typography.js)
import styles from "../styles/layout.module.css"
import ColorScheme from "../utils/colorscheme"

const artLoader = () => import("./bg-art")
const Art = ReactDynamicComponent({
  loader: artLoader,
})

const ListLink = props => (
  <li>
    <Link to={props.to} activeStyle={{ textDecoration: `underline` }}>
      {props.children}
    </Link>
  </li>
)

const Menu = () => (
  <div className={styles.menu}>
    <div className={styles.menuLeft}>
      <div className={styles.name}>
        <Link to="/">Gus Murphy</Link>
      </div>
      <Link to="/work">Work</Link>
    </div>
    <div className={styles.menuRight}>
      <div className={styles.icons}>
        <a
          href="https://github.com/gusbmurphy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaGithub />
          </div>
        </a>
        <a
          href="https://codepen.io/murphyg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaCodepen />
          </div>
        </a>
      </div>
    </div>
    {/* <div className={styles.nav}>
      <ul>
        <ListLink to="/work/">Work</ListLink>
        <ListLink to="/writings/">Writings</ListLink>
      </ul>
    </div> */}
    {/* <div className={styles.links}>
      <div className={styles.linksItem}><a href="https://github.com/gusbmurphy" target="_blank" rel="noopener noreferrer"><FaGithub /></a></div>
      <div className={styles.linksItem}><a href="https://codepen.io/murphyg" target="_blank" rel="noopener noreferrer"><FaCodepen /></a></div>
    </div> */}
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
        <Menu />
        <div className={styles.pageContainer}>
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
