import Typography from "typography"
import GithubTheme from "typography-theme-github"
import colorScheme from "./colorscheme"

// const colorScheme = {
//   background: "#FEF49C",
//   text: "#000000",
//   highlight: "#BFB875"
// }

GithubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  html: {
    background: `${colorScheme.background}`,
  },
  h1: {
    fontFamily: "Heebo, sans-serif",
    fontWeight: 1000,
    borderBottom: "none",
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
    color: `${colorScheme.text}`,
  },
  a: {
    color: `${colorScheme.highlight}`,
    textDecoration: "underline",
  },
  "a:hover,a:active": {
    textDecoration: "underline",
  },
  "a h1": {
    color: `${colorScheme.text}`
  }
})
GithubTheme.bodyColor = colorScheme.text
const typography = new Typography(GithubTheme)

export const { scale, rhythm, options } = typography
export default typography
