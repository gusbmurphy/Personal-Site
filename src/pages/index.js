import React, { useState, useEffect } from "react"
import styles from "../styles/about.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function About() {
  const [showGus, setShowGus] = useState(false)
  const [gusPos, setGusPos] = useState({ x: 50, y: 50 })
  const [showTc, setShowTc] = useState(false)
  const [tcPos, setTcPos] = useState({ x: 50, y: 50 })
  const [showPizza, setShowPizza] = useState(false)
  const [pizzaPos, setPizzaPos] = useState({ x: 50, y: 50 })
  const [mousePos, setMousePos] = useState(null);

  const data = useStaticQuery(graphql`
    query {
      heggies: file(relativePath: { eq: "heggies.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      me: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      matts: file(relativePath: { eq: "matts.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  function PictureText({ setShowFunc, setPosFunc, children }) {
    return (
      <span
        onMouseEnter={() => setShowFunc(true)}
        onMouseLeave={() => setShowFunc(false)}
        onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
        // Get positioning for associated image
        // ref={el => {
        //   if (!el) return
        //   const y = el.getBoundingClientRect().bottom
        //   const x = Math.floor(window.innerWidth / 2)
        //   setPosFunc({x, y})
        // }}
        className={styles.pictureText}
      >
        {children}
      </span>
    )
  }

  function BGPicture({ fixed, shouldShow }) {
    const x = 50
    const y = 50
    if (shouldShow && mousePos) {
      console.log(mousePos.x, mousePos.y)
      return <Img fixed={fixed} style={{ left: mousePos.x + 10, top: mousePos.y + 10, position: "fixed" }} />
    }
    return null
  }

  return (
    <>
      <p className={styles.about}>
        <PictureText setShowFunc={setShowGus} setPosFunc={setGusPos}>
          Gus Murphy
        </PictureText>{" "}
        lives in the{" "}
        <PictureText setShowFunc={setShowTc} setPosFunc={setTcPos}>
          Twin Cities
        </PictureText>
        . He's a musician, playing trombone and bass, and knows the{" "}
        <PictureText setShowFunc={setShowPizza} setPosFunc={setPizzaPos}>
          correct way to slice pizza
        </PictureText>
        . Gus is currently looking for work in web development—you can find him
        on <a href="https://www.linkedin.com/in/augustus-murphy-47b8b8193/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/gusbmurphy" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
      <BGPicture
        shouldShow={showGus}
        // pos={gusPos}
        fixed={data.me.childImageSharp.fixed}
      />
      <BGPicture
        shouldShow={showTc}
        // pos={tcPos}
        fixed={data.matts.childImageSharp.fixed}
      />
      <BGPicture
        shouldShow={showPizza}
        // pos={pizzaPos}
        fixed={data.heggies.childImageSharp.fixed}
      />
    </>
  )
}
