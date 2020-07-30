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

let minWidth = 400
let minHeight = 300

class Art extends PtsCanvas {
  animate(time, ftime, space) {
    let t = Num.cycle((time % 60000) / 60000)

    let artWidth =
      space.width /** (3/8) < minWidth ? minWidth : space.width * (3/8)*/
    let artHeight =
      space.height * (2 / 5) < minHeight ? minHeight : space.height * (2 / 5)

    // let minDistanceFromRightEdge = artWidth + 50;
    let calcLeftBound = space.width * (2 / 5)

    // let leftBound = calcLeftBound > (space.width - minDistanceFromRightEdge) ? minDistanceFromRightEdge : calcLeftBound
    let leftBound = /*calcLeftBound*/ 0
    let rightBound = /*leftBound + artWidth*/ space.width
    let bottomBound = space.height /** (9/10)*/
    let topBound = bottomBound - artHeight

    let bottomLeft = new Pt([leftBound, bottomBound])
    let bottomRight = new Pt([rightBound, bottomBound])

    let curveStart = new Pt([leftBound, topBound + 50])
    let curveEnd = new Pt([rightBound, topBound])

    let variance = artHeight * (2 / 8) * (0.5 - t)
    let c1 = new Pt([leftBound + artWidth * (1 / 4), curveStart.y + variance])
    let c2 = new Pt([leftBound + artWidth * (3 / 4), curveEnd.y - variance])

    let curve1 = Curve.cardinal([curveStart, c1, c2, curveEnd], 10)
    curve1.unshift(bottomLeft)
    curve1.push(bottomRight)

    let curve2Height = artHeight * 0.6
    let curve2Top = bottomBound - curve2Height
    let curve2Start = new Pt([leftBound, curve2Top + 20])
    let curve2End = new Pt([rightBound, curve2Top - 10])
    let curve2Variance = curve2Height * (1 / 8) * (0.4 - t)
    let curve2Handle1 = new Pt([
      leftBound + artWidth * (1 / 5),
      curve2Start.y + curve2Variance,
    ])
    let curve2Handle2 = new Pt([
      leftBound + artWidth * (3 / 5),
      curve2End.y - curve2Variance,
    ])

    let curve2 = Curve.cardinal(
      [curve2Start, curve2Handle1, curve2Handle2, curve2End],
      10
    )
    curve2.unshift(bottomLeft)
    curve2.push(bottomRight)

    let curve3Height = artHeight * 0.3
    let curve3Top = bottomBound - curve3Height
    let curve3Start = new Pt([leftBound, curve3Top])
    let curve3End = new Pt([rightBound, curve3Top + 30])
    let curve3Variance = curve3Height * (1/3) * (0.6 - t)
    let curve3Handle1 = new Pt([
      leftBound + artWidth * (3 / 7),
      curve3Start.y - curve3Variance
    ])
    let curve3Handle2 = new Pt([
      leftBound + artWidth * (4/5),
      curve3End.y + curve3Variance
    ])

    let curve3 = Curve.cardinal(
      [curve3Start, curve3Handle1, curve3Handle2, curve3End],
      10
    )
    curve3.unshift(bottomLeft)
    curve3.push(bottomRight)

    // console.log(curve2)
    this.form.fillOnly("#ff9234").line(curve1)
    this.form.fillOnly("#ffcd3c").line(curve2)
    this.form.fillOnly("#35d0ba").line(curve3)
    //"rgba(80,30,50,.8)"
    //"#fbfb7d"
  }

  start(bound, space) {
    // Optional code for canvas init
  }

  action(type, x, y, event) {
    // Optional code for interaction
  }

  resize(size, event) {
    // Optional code for resize
  }
}

export { Art as default }
