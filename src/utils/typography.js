import Typography from "typography"
import GithubTheme from "typography-theme-github"
import ColorScheme from "./colorscheme"

import ReactDynamicComponent from "react-dynamic-import"

if (typeof window !== "undefined") {
  let WebFont = require("webfontloader")
  WebFont.load({
    typekit: {
      id: `usw0zxa`,
    },
  })
}
// const ColorScheme = {
//   background: "#FEF49C",
//   text: "#000000",
//   highlight: "#BFB875"
// }

GithubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  html: {
    background: ColorScheme.background,
    text: ColorScheme.text
  },
  h1: {
    fontSize: `3.6em`,
    fontWeight: 400,
    // color: `white`,
    borderBottom: `none`,
    paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
    marginBottom: rhythm(3 / 4),
    marginTop: rhythm(1.5),
  },
  h2: {
    borderBottom: "none",
    paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
    marginBottom: rhythm(1 / 4),
    marginTop: rhythm(1),
    color: ColorScheme.text,
  },
  "h1,h2,h3,h4,h5,h6": {
    fontFamily: `ff-spinoza-web-pro, serif`,
    color: ColorScheme.text,
  },
  // h6: {
  //   color: `white`
  // },
  a: {
    color: ColorScheme.text,
    textDecoration: "underline",
  },
  "a:hover,a:active": {
    color: "blue",
    textDecoration: "underline",
  },
  "@media (max-width: 800px)": {},
})
GithubTheme.bodyColor = ColorScheme.text
const typography = new Typography(GithubTheme)

export const { scale, rhythm, options } = typography
export default typography
