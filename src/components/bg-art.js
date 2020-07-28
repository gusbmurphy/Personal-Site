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

class Wave extends PtsCanvas {
  constructor() {
    super()

    this.colors = [ColorScheme.secondary, ColorScheme.tertiary]

    this.bottomLeft = null
    this.bottomRight = null
    this.curveStart = null
    this.curveEnd = null

    // "c1" and "c2" are the control points for the curve.
    this.c1 = null
    this.c2 = null
  }

  // Given a value, "t", between 0 and 1, return a point between the starting position and end position.
  pointAt(t, startPos, endPos) {
    let delta = new Group(startPos, endPos)
    let value = Shaping.linear(t, 1)
    return delta.interpolate(value)
  }

  componentDidUpdate() {}

  // Override PtsCanvas' start function
  start(space, bound) {
    if (typeof window !== `undefined`) {
      this.bottomLeft = new Pt([0, this.space.height])
      this.bottomRight = new Pt([this.space.width, this.space.height])
      this.curveStart = new Pt([0, this.space.height / 2])
      this.curveEnd = new Pt([this.space.width, this.space.height / 2])

      this.c1 = new Pt([
        this.space.width * 0.25,
        this.space.height / 2 + this.space.height * 0.75,
      ])
      this.c2 = new Pt([this.space.width * 0.75, this.space.height * 0.75])

      this.bgCurve = Curve.cardinal([this.curveStart, this.c1, this.c2, this.curveEnd], 10)
    }
  }

  animate(time, ftime) {
    let t = Num.cycle((time % 6000) / 6000)

    this.c1 = new Pt([
      this.space.width * 0.25,
      (this.space.height / 2) * -t + this.space.height * 0.75,
    ])
    this.c2 = new Pt([this.space.width * 0.75, this.space.height * 0.75 * t])

    this.bgCurve.unshift(this.bottomLeft)
    this.bgCurve.push(this.bottomRight)

    this.form.fillOnly("rgba(80,30,50,.8)").line(this.bgCurve)
  }
}

export { Wave as default }
