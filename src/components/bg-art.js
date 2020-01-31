import {
  Pt,
  Group,
  Line,
  Create,
  Shaping,
  Curve,
  Geom,
  Num,
  Rectangle
} from "pts/dist/es5"

import { PtsCanvas } from "react-pts-canvas"

import ColorScheme from "../utils/colorscheme"

let showWidgets = false

// TODO: Make it so that when resizing the window, the animation is not "redrawn". Not sure how to do this!

class Blobs extends PtsCanvas {
  constructor() {
    super()
    this.follower = new Pt()
    this.numOfBlobs = 2
    this.blobs = []
    this.getMousePt = this.getMousePt.bind(this)
    this.pointAt = this.pointAt.bind(this)
    this.colors = [ColorScheme.secondary, ColorScheme.tertiary]
  }

  getMousePt() {
    return new Pt([this.props.mousePos.x, this.props.mousePos.y])
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
      // blobMinPoints.anchorTo(blobCenter)
      // blobMaxPoints.anchorTo(blobCenter)
      // tracks.anchorTo(blobCenter)

      blobPoints = blobMinPoints.clone()

      // blobPoints.anchorTo(blobCenter)

      this.blobs.push({
        points: blobPoints,
        minPoints: blobMinPoints,
        maxPoints: blobMaxPoints,
        center: blobCenter,
        tracks: tracks,
      })
    }
  }

  animate(time, ftime) {
    this.follower = this.follower.add(
      this.getMousePt()
        .$subtract(this.follower)
        .divide(20)
    )
    let t = Num.cycle((time % 14000) / 14000)
    // let rotateT = Shaping.cubicInOut((time % 14000) / 14000)
    // Make the blobs rotate around the follower.
    for (let i = 0; i < this.numOfBlobs; i++) {
      let blob = this.blobs[i]

      // Geom.rotate2D(blob.center, 0.001, this.follower)
    
      // // Clamp the blob center within view.
      // if (!Rectangle.withinBound([this.space.outerBound.topLeft, this.space.outerBound.bottomRight], blob.center)) {
      //   // console.log(`Blob ${i + 1} is outside of view`)
      //   if (blob.center[0] < 0) {
      //     // console.log(`Blob ${i + 1} is left of view`)
      //     blob.center.to(new Pt([0, blob.center[1]]))
      //   }
      //   if (blob.center[1] < 0) {
      //     // console.log(`Blob ${i + 1} above view`)
      //     blob.center.to(new Pt([blob.center[0], 0]))
      //   }
      //   if (blob.center[0] > this.space.width) {
      //     // console.log(`Blob ${i + 1} is right of view`)
      //     blob.center.to(new Pt([this.space.width, blob.center[1]]))
      //   }
      //   if (blob.center[1] > this.space.height) {
      //     // console.log(`Blob ${i + 1} below view`)
      //     blob.center.to(new Pt([blob.center[0], this.space.height]))
      //   }
      // }

      // let pointCollections = [blob.minPoints, blob.maxPoints]
      // pointCollections.forEach(group => {
      //   Geom.rotate2D(group, 0.001, this.follower)
      // })
      
      // Make the blob "breath" in by moving the points along their tracks.
      let temp = new Group()
      for (let i = 0; i < blob.minPoints.length; i++) {
        temp.push(this.pointAt(t, blob.minPoints[i], blob.maxPoints[i]))
      }
      // Why do we have to close the curve this way?
      temp.push(temp.p1)
      temp.push(temp.p2)
      temp.push(temp.p3)

      

      this.form.fillOnly(this.colors[i]).line(Curve.bspline(temp, 10))
      // this.form.fillOnly("green").point(blob.center)
    }
  }
}

export { Blobs as default }
