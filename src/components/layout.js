import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"
// import Art from "../components/bg-art"
import ColorScheme from "../utils/colorscheme"
// import { Sidebar } from "../components/sidebar"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Sidebar = () => (
  <div className={layoutStyles.sidebar}>
    <header>
      <Link to="/">
        <h1>Gus Murphy</h1>
      </Link>
      <ul style={{ listStyle: `none` }}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/bananas/">Bananas</ListLink>
        <ListLink to="/school-time/">School Time</ListLink>
        <ListLink to="/the-hospital/">The Hospital</ListLink>
      </ul>
    </header>
  </div>
)

let mousePos = {
  x: 300,
  y: 800,
}

if (typeof window !== `undefined`) {
  document.documentElement.onmousemove = function(e) {
    mousePos.x = e.clientX
    mousePos.y = e.clientY
  }
}

export default ({ children }) => (
  <div style={{ position: `relative`, width: `100%`, height: `100%` }}>
    <div style={{ margin: `auto`, maxWidth: 800, zIndex: 100 }}>
      <Sidebar />
      <div className={layoutStyles.content}>{children}</div>
    </div>
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
      {/* <Art
        name="pts_anim"
        background={ColorScheme.background}
        pause="false"
        style={{ height: "100%" }}
        mousePos={mousePos}
      /> */}
    </div>
  </div>
)
