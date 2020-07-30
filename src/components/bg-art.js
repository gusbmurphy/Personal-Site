import {
  Pt,
  Curve,
  Num,
} from "pts/dist/es5"

import { PtsCanvas } from "react-pts-canvas"

let minHeight = 300

class Art extends PtsCanvas {
  animate(time, ftime, space) {
    let t = Num.cycle((time % 60000) / 60000)

    let artWidth = space.width
    let artHeight =
      space.height * (2 / 5) < minHeight ? minHeight : space.height * (2 / 5)

    let leftBound = 0
    let rightBound = space.width
    let bottomBound = space.height

    let bottomLeft = new Pt([leftBound, bottomBound])
    let bottomRight = new Pt([rightBound, bottomBound])

    function createCurve(
      percOfTotalHeight,
      startHeightDif,
      endHeightDif,
      handle1Perc,
      handle2Perc,
      variance1,
      variance2
    ) {
      let height = artHeight * percOfTotalHeight
      let top = bottomBound - height
      let start = new Pt([leftBound, top + startHeightDif])
      let end = new Pt([rightBound, top + endHeightDif])
      let c1 = new Pt([
        leftBound + artWidth * handle1Perc,
        start.y + height * variance1,
      ])
      let c2 = new Pt([
        leftBound + artWidth * handle2Perc,
        end.y + height * variance2,
      ])

      let curve = Curve.cardinal([start, c1, c2, end], 10)
      curve.unshift(bottomLeft)
      curve.push(bottomRight)
      return curve
    }

    let curve1 = createCurve(
      1,
      50,
      -10,
      1 / 4,
      3 / 4,
      (2 / 8) * (0.5 - t),
      (2 / 8) * (0.5 - t)
    )
    let curve2 = createCurve(
      0.6,
      20,
      -10,
      1 / 5,
      3 / 5,
      (1 / 8) * (0.4 - t),
      -(1 / 8) * (0.4 - t)
    )
    let curve3 = createCurve(
      0.3,
      0,
      30,
      3 / 7,
      4 / 5,
      -(1 / 3) * (0.6 - t),
      (1 / 3) * (0.6 - t)
    )

    this.form.fillOnly("#ff9234").line(curve1)
    this.form.fillOnly("#ffcd3c").line(curve2)
    this.form.fillOnly("#35d0ba").line(curve3)
  }
}

export { Art as default }
