import Typography from "typography"
import GithubTheme from "typography-theme-github"
import ColorScheme from "./colorscheme"

// const ColorScheme = {
//   background: "#FEF49C",
//   text: "#000000",
//   highlight: "#BFB875"
// }

GithubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  html: {
    background: `${ColorScheme.background}`,
  },
  h1: {
    fontFamily: "Heebo, sans-serif",
    fontWeight: 1000,
    borderBottom: "solid 1px black",
    paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
    marginBottom: rhythm(3 / 4),
    marginTop: rhythm(1.5),
  },
  h2: {
    borderBottom: "none",
    paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
    marginBottom: rhythm(1 / 4),
    marginTop: rhythm(1),
  },
  h6: {
    color: `${ColorScheme.text}`,
  },
  a: {
    color: `${ColorScheme.highlight}`,
    textDecoration: "underline",
  },
  "a:hover,a:active": {
    color: "blue",
    textDecoration: "underline",
  },
  "a h1": {
    color: `${ColorScheme.text}`
  }
})
GithubTheme.bodyColor = ColorScheme.text
const typography = new Typography(GithubTheme)

export const { scale, rhythm, options } = typography
export default typography
