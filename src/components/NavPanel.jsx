import { FAIcon } from "../components/FAIcon"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import NameGraphic from "../../static/assets/gmname.svg"
import { nord1, nord14, nord2, nord6, nord8 } from "../utils/color-scheme"

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

const NavPanelWidthInVw = 25
const NavPanelPaddingInEm = 2
const StyledNavPanel = styled.div`
  background-color: ${nord6};
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
  max-width: 300px;
  padding-top: 20%;
  fill: ${nord8};
`

const Tagline = styled.div`
  margin-bottom: 3em;
  color: ${nord1};
  margin-top: 0.2em;
  font-size: 1.1em;
`

const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
`

const NavLink = styled(Link)`
  color: ${nord2};
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
  color: ${nord14};
  font-size: 2em;

  :not(:last-of-type) {
    margin-right: 0.4em;
  }
`

export const NavPanelSpacer = styled(StyledNavPanel)`
  background-color: white;
  position: static;
  padding: 0;
  min-width: calc(${NavPanelWidthInVw}vw + ${NavPanelPaddingInEm * 2}em);
`

export default NavPanel
