import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Text from "../components/text"
import styles from "../styles/layout.module.css"

export default () => (
    // <h1 style={{ textAlign: `right`, marginTop: `33%`, fontSize: `5em`}}>&#8220;I <i>hate</i> being on <i>the computer</i>.&#8221;</h1>
    <Text>
      <div className={styles.contentSummary}>Hello!</div>
    </Text>
)