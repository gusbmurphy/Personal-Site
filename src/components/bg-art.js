import {
  Pt,
  Group,
  Line,
  Create,
  Shaping,
  Curve,
  Geom,
  Num
} from "pts/dist/es5"

import { PtsCanvas } from "react-pts-canvas"

import ColorScheme from "../utils/colorscheme"

// TODO: Make it so that when resizing the window, the animation is not "redrawn". Not sure how to do this!

class Blobs extends PtsCanvas {
  constructor() {
    super()
    this.numOfBlobs = 2
    this.blobs = []
    this.pointAt = this.pointAt.bind(this)
    this.colors = [ColorScheme.secondary, ColorScheme.tertiary]
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
      for (let i = 0; i < this.numOfBlobs; i++) {
        let blobMaxPoints, blobMinPoints, blobCenter, blobPoints, radius, tracks
        let x = Math.floor(Math.random() * this.space.width)
        let y = Math.floor(Math.random() * this.space.height)
        blobCenter = new Pt([x, y])

        radius = this.space.size.minValue().value / 2
        blobMaxPoints = Create.radialPts(blobCenter, radius, 10)
        // Add some randomness to the points.
        blobMaxPoints = blobMaxPoints.map(p =>
          p.add(40 * (Math.random() - Math.random()))
        )
        // Add "tracks" for the points to move on.
        tracks = blobMaxPoints.map(p => new Group(blobCenter, p))

        // Make the "blobMinPoints" randomly along each track, this is the minimum amount the points can move in to.
        let maxMod = 0.9
        let temp, modifier, trackMag, shortTrackEnd
        blobMinPoints = tracks.map(track => {
          temp = track.clone()
          trackMag = Line.magnitude(track)
          // Generate a random modifier for the shorter vector.
          modifier = Math.random() * (1 - maxMod) + maxMod
          Geom.scale(temp, modifier, blobCenter)
          return temp[1]
        })

        blobPoints = blobMinPoints.clone()

        this.blobs.push({
          points: blobPoints,
          minPoints: blobMinPoints,
          maxPoints: blobMaxPoints,
          center: blobCenter,
          tracks: tracks,
        })
      }
    }
  }

  animate(time, ftime) {
    let t = Num.cycle((time % 14000) / 14000)
    for (let i = 0; i < this.numOfBlobs; i++) {
      let blob = this.blobs[i]

      let temp = new Group()
      for (let i = 0; i < blob.minPoints.length; i++) {
        temp.push(this.pointAt(t, blob.minPoints[i], blob.maxPoints[i]))
      }

      temp.push(temp.p1)
      temp.push(temp.p2)
      temp.push(temp.p3)

      this.form.fillOnly(this.colors[i]).line(Curve.bspline(temp, 10))
    }
  }
}

export { Blobs as default }
