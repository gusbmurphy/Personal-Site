import { FAIcon } from "../components/FAIcon"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import NameGraphic from "../../static/assets/gmname.svg"

const NavPanelWidthInVw = 25
const NavPanelPaddingInEm = 2
const StyledNavPanel = styled.div`
  background-color: #eceff4;
  width: ${NavPanelWidthInVw}vw;
  max-width: 445px;
  min-width: 300px;
  height: 100vh;
  position: fixed;
  padding: ${NavPanelPaddingInEm}em;
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
  font-size: 1.55em;

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

export const NavPanelSpacer = styled(StyledNavPanel)`
  background-color: none;
  position: static;
  padding: 0;
  min-width: calc(${NavPanelWidthInVw}vw + ${NavPanelPaddingInEm * 2}em);
`

export default NavPanel
