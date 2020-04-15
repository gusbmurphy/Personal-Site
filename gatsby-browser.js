import "./src/styles/global.css"

// Load Adobe Fonts
if (typeof window !== "undefined") {
    let WebFont = require("webfontloader")
    WebFont.load({
      typekit: {
        id: `poe1vow`,
      },
    })
  }