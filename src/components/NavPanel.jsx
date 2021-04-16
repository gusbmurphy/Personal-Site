import { FAIcon } from "../components/FAIcon"
import React from "react"
import { Link } from "gatsby"
import {
  StyledNavPanel,
  NavPanelInnerContainer,
  StyledNameGraphic,
  Tagline,
  LinkSection,
  NavLink,
  IconSection,
  StyledIconSpan,
  NavIconLink,
} from "../styles/NavPanel"

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
          {/* <NavLink to="/">Writing</NavLink> */}
        </LinkSection>
      </div>
      <div>
        <IconSection>
          <StyledIconSpan>
            <NavIconLink
              href="https://github.com/gusbmurphy"
              target="_blank"
              rel="noreferrer"
            >
              <FAIcon name="fa fa-github" />
            </NavIconLink>
          </StyledIconSpan>
          <StyledIconSpan>
            <NavIconLink
              href="mailto: gusbmurphy@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FAIcon name="fa fa-envelope" />
            </NavIconLink>
          </StyledIconSpan>
          <StyledIconSpan>
            <NavIconLink
              href="https://github.com/gusbmurphy"
              target="_blank"
              rel="noreferrer"
            >
              <FAIcon name="fa fa-linkedin-square" />
            </NavIconLink>
          </StyledIconSpan>
        </IconSection>
      </div>
    </NavPanelInnerContainer>
  </StyledNavPanel>
)

export default NavPanel
