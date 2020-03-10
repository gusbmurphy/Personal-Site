import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.css"
import Art from "../components/bg-art"
import ColorScheme from "../utils/colorscheme"
// import Sidebar from "./sidebar"

const ListLink = props => (
  <li>
    <Link to={props.to} className={styles.hvrSweepToLeft}>
      {props.children}
    </Link>
  </li>
)

const Sidebar = () => (
  <div className={styles.sidebar}>
    {/* <div className={styles.imprintContainer}> */}
      <div className={styles.imprint}>
        <Link to="/">
          <p className={styles.imprintFirstName}>Gus</p>
          <p className={styles.imprintLastName}>Murphy</p>
        </Link>
      </div>
    {/* </div> */}
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

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ position: `relative`, width: `100%`, height: `100%` }}>
        <div>
          <Sidebar />
          {/* <div className={styles.topBar}><p>Writings</p></div> */}
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
          <Art
            name="pts_anim"
            background={ColorScheme.background}
            pause="false"
            style={{ height: "100%" }}
            mousePos={mousePos}
          />
        </div>
      </div>
    )
  }
}

export { Layout as default }

// export default ({ children }) => (
//   <div style={{ position: `relative`, width: `100%`, height: `100%` }}>
//     <div>
//       <Sidebar />
//       {/* <div className={styles.topBar}><p>Writings</p></div> */}
//       <div className={styles.content}>{children}</div>
//     </div>
//     {/* This div is styled here for the background art. */}
//     <div
//       style={{
//         position: `fixed`,
//         top: 0,
//         left: 0,
//         zIndex: -100,
//         width: `100%`,
//         height: `100%`,
//       }}
//     >
//       <Art
//         name="pts_anim"
//         background={ColorScheme.background}
//         pause="false"
//         style={{ height: "100%" }}
//         mousePos={mousePos}
//       />
//     </div>
//   </div>
// )
