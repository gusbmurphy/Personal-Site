import React from "react"
// TODO: Consolidate all the CSS! (From modules, and from typography.js)
import { Helmet } from "react-helmet"
import styled from "styled-components"
import NavPanel, { NavPanelSpacer } from "./NavPanel"

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: null,
    }
  }

  render() {
    return (
      <MainContainer>
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
        <NavPanel />
        <PageContainer>
          <NavPanelSpacer />
          <div>
            <div>{this.props.children}</div>
          </div>
        </PageContainer>
      </MainContainer>
    )
  }
}

export { Layout as default }
