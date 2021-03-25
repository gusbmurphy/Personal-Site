import React from "react"
import { Helmet } from "react-helmet"
import { nord1, nord10 } from "../utils/color-scheme"
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
  background-color: white;
  color: ${nord1};
  padding: 4em;
  box-shadow: inset 25px 0 25px -35px rgb(0 0 0 / 25%);
  a {
    color: ${nord10};
  }
`

const Layout = props => (
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
      <PageContent>{props.children}</PageContent>
    </PageContainer>
  </MainContainer>
)

export { Layout as default }
