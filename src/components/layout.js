import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"
import { AnimationExample, PointerInteraction } from "../components/index-art"
// import { Sidebar } from "../components/sidebar"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Art = () => (
  <PointerInteraction
    name="pts_anim"
    background="#fe3"
    pause="false"
    style={{ height: "100%" }}
  />
)

const Sidebar = () => (
  <div className={layoutStyles.sidebar}>
    <header>
      <Link to="/">
        <h1>Gus Murphy</h1>
      </Link>
      <ul style={{ listStyle: `none` }}>
        <ListLink to="/about/">About</ListLink>
      </ul>
    </header>
  </div>
)

let mousePos = {
  x: 0,
  y: 0
};

document.documentElement.onmousemove = function(e) {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
}

export default ({ children }) => (
  <div style={{ position: `relative`, width: `100%`, height: `100%` }}>
    <div style={{ margin: `auto`, maxWidth: 800, zIndex: 100 }}>
      <Sidebar />
      <div className={layoutStyles.content}>{children}</div>
    </div>
    <div style={{ position: `fixed`, top: 0, left: 0, zIndex: -100, width: `100%`, height: `100%`, background: `blue`}}>
      <Art mousePos={mousePos}/>
    </div>
  </div>
)