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
            <a
              href="https://github.com/gusbmurphy"
              target="_blank"
              rel="noreferrer"
            >
              <FAIcon name="fa fa-github" />
            </a>
          </StyledIconSpan>
          <StyledIconSpan>
            <a
              href="mailto: gusbmurphy@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FAIcon name="fa fa-envelope" />
            </a>
          </StyledIconSpan>
          <StyledIconSpan>
            <a
              href="https://github.com/gusbmurphy"
              target="_blank"
              rel="noreferrer"
            >
              <FAIcon name="fa fa-linkedin-square" />
            </a>
          </StyledIconSpan>
        </IconSection>
      </div>
    </NavPanelInnerContainer>
  </StyledNavPanel>
)

export default NavPanel
