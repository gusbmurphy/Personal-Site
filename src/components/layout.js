import React from "react"
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
const PageContent = styled.div`
  margin: 2em;
`

const Layout = () => (
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
      <PageContent>{this.props.children}</PageContent>
    </PageContainer>
  </MainContainer>
)

export { Layout as default }
