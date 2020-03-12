import Typography from "typography"
import GithubTheme from "typography-theme-github"
import ColorScheme from "./colorscheme"
import { withAssetPrefix } from "gatsby"

// const ColorScheme = {
//   background: "#FEF49C",
//   text: "#000000",
//   highlight: "#BFB875"
// }

GithubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  html: {
    background: ColorScheme.background
  },
  h1: {
    fontFamily: "Heebo, sans-serif",
    fontSize: `3.6em`,
    fontWeight: 700,
    // color: `white`,
    borderBottom: `none`,
    paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
    marginBottom: rhythm(3 / 4),
    marginTop: rhythm(1.5)
  },
  h2: {
    borderBottom: "none",
    paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
    marginBottom: rhythm(1 / 4),
    marginTop: rhythm(1),
    color: `white`
  },
  "h1,h2,h3,h4,h5,h6": {
    color: `white`
  },
  // h6: {
  //   color: `white`
  // },
  a: {
    color: `white`,
    textDecoration: "underline",
  },
  "a:hover,a:active": {
    color: "blue",
    textDecoration: "underline",
  }
})
GithubTheme.bodyColor = ColorScheme.text
const typography = new Typography(GithubTheme)

export const { scale, rhythm, options } = typography
export default typography
