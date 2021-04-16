import styled from "styled-components"
import NameGraphic from "../../static/assets/gmname.svg"
import { Link } from "gatsby"
import { nord6, nord8, nord1, nord2, nord14 } from "../utils/color-scheme"

export const NavPanelWidthInVw = 25
export const NavPanelPaddingInEm = 2
export const StyledNavPanel = styled.div`
  background-color: ${nord6};
  width: ${NavPanelWidthInVw}vw;
  max-width: 445px;
  min-width: 300px;
  height: 100vh;
  position: fixed;
  padding: ${NavPanelPaddingInEm}em;
`

export const NavPanelInnerContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledNameGraphic = styled(NameGraphic)`
  max-width: 300px;
  padding-top: 20%;
  fill: ${nord8};
`

export const Tagline = styled.div`
  margin-bottom: 3em;
  color: ${nord1};
  margin-top: 0.2em;
  font-size: 1.1em;
`

export const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavLink = styled(Link)`
  color: ${nord2};
  text-decoration: none;
  font-size: 1.55em;

  :not(:last-of-type) {
    margin-bottom: 0.4em;
  }
`

export const IconSection = styled.div`
  margin-top: 2em;
  display: flex;
`

export const StyledIconSpan = styled.span`
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
