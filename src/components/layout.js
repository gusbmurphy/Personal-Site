import { FAIcon } from "../components/FAIcon"
import { Link } from "gatsby"
import React from "react"
// TODO: Consolidate all the CSS! (From modules, and from typography.js)
import * as styles from "../styles/layout.module.css"
import { Helmet } from "react-helmet"
import colors from "colorscheme"
import styled from "styled-components"
import NameGraphic from "../../static/assets/gmname.svg"

const StyledNavPanel = styled.div`
  background-color: #eceff4;
  width: 25vw;
  max-width: 445px;
  min-width: 200px;
  height: 100vh;
  position: fixed;
  padding: 2em;
`

const NavPanelInnerContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledNameGraphic = styled(NameGraphic)`
  padding-top: 20%;
  fill: #88c0d0;
`

const Tagline = styled.div`
  margin-bottom: 3em;
  color: #4c566a;
  margin-top: 0.2em;
  font-size: 1.1em;
`

const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
`

const NavLink = styled(Link)`
  color: #2e3440;
  text-decoration: none;
  font-size: 1.75em;

  :not(:last-of-type) {
    margin-bottom: 0.4em;
  }
`

const IconSection = styled.div`
  margin-top: 2em;
  display: flex;
`

const StyledIconSpan = styled.span`
  color: #b48ead;
  font-size: 2em;

  :not(:last-of-type) {
    margin-right: 0.4em;
  }
`

const NavPanel = () => (
  <StyledNavPanel>
    <NavPanelInnerContainer>
      <div>
        <Link to="/">
          <StyledNameGraphic />
        </Link>
        <Tagline>Trombone & Computer</Tagline>
        <LinkSection>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/work">About</NavLink>
          <NavLink to="/">Writing</NavLink>
        </LinkSection>
      </div>
      <div>
        <IconSection>
          <StyledIconSpan>
            <FAIcon name="fa fa-github" />
          </StyledIconSpan>
          <StyledIconSpan>
            <FAIcon name="fa fa-envelope" />
          </StyledIconSpan>
          <StyledIconSpan>
            <FAIcon name="fa fa-linkedin-square" />
          </StyledIconSpan>
        </IconSection>
      </div>
    </NavPanelInnerContainer>
  </StyledNavPanel>
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
        <div className={styles.pageContainer}>
          <div className={styles.content}>{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export { Layout as default }
