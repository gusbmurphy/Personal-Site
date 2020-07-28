import {
  Pt,
  Group,
  Line,
  Create,
  Shaping,
  Curve,
  Geom,
  Num,
} from "pts/dist/es5"

import { PtsCanvas } from "react-pts-canvas"

import ColorScheme from "../utils/colorscheme"

// TODO: Make it so that when resizing the window, the animation is not "redrawn". Not sure how to do this!

let minWidth = 400;
let minHeight = 500;

class Art extends PtsCanvas {
  animate (time, ftime, space) { 
    let t = Num.cycle((time%60000)/60000);

    let artWidth = space.width /** (3/8) < minWidth ? minWidth : space.width * (3/8)*/
    let artHeight = space.height * (2/5) < minHeight ? minHeight : space.height * (2/5)

    // let minDistanceFromRightEdge = artWidth + 50;
    let calcLeftBound = space.width * (2/5)

    // let leftBound = calcLeftBound > (space.width - minDistanceFromRightEdge) ? minDistanceFromRightEdge : calcLeftBound
    let leftBound = /*calcLeftBound*/ 0
    let rightBound = /*leftBound + artWidth*/ space.width
    let bottomBound = space.height /** (9/10)*/
    let topBound = bottomBound - artHeight

    let bottomLeft = new Pt([leftBound, bottomBound])
    let bottomRight = new Pt([rightBound, bottomBound])

    let curveStart = new Pt([leftBound, topBound + 50])
    let curveEnd = new Pt([rightBound, topBound])

    let variance = ((artHeight * (2/8)) * (0.5 - t));
    let c1 = new Pt([leftBound + (artWidth * (1/4)), curveStart.y + variance])
    let c2 = new Pt([leftBound + (artWidth * (3/4)), curveEnd.y - variance])
  
    let curve = Curve.cardinal([curveStart, c1, c2, curveEnd], 10)
    curve.unshift(bottomLeft)
    curve.push(bottomRight)

    this.form.fillOnly("rgba(80,30,50,.6)").line(curve)
    //"rgba(80,30,50,.8)"
    //"#fbfb7d"
  }

  start (bound, space) { 
    // Optional code for canvas init 
  }

  action (type, x, y, event) { 
    // Optional code for interaction 
  }

  resize (size, event) { 
    // Optional code for resize 
  }
}

export { Art as default }