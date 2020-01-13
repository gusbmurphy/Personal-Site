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

let showWidgets = false;

// TODO: Make it so that when resizing the window, the animation is not "redrawn". Not sure how to do this!

export class Blobs extends PtsCanvas {
  constructor() {
    super()
    this.follower = new Pt()
    this.blob = {}
    this.getMousePt = this.getMousePt.bind(this)
    this.pointAt = this.pointAt.bind(this)
  }

  getMousePt() {
    return new Pt([this.props.mousePos.x, this.props.mousePos.y])
  }

  _create() {
    let blobMaxPoints, blobMinPoints, blobCenter, blobPoints, radius, tracks
    let x = Math.floor(Math.random() * this.space.width)
    let y = Math.floor(Math.random() * this.space.height)
    blobCenter = new Pt([x, y])

    radius = this.space.size.minValue().value / 4
    blobMaxPoints = Create.radialPts(blobCenter, radius, 10)
    // Add some randomness to the points.
    blobMaxPoints = blobMaxPoints.map(p =>
      p.add(40 * (Math.random() - Math.random()))
    )
    // Add "tracks" for the points to move on.
    tracks = blobMaxPoints.map(p => new Group(blobCenter, p))

    // Make the "blobMinPoints" randomly along each track, this is the minimum amount the points can move in to.
    let maxMod = 0.7
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

    this.blob = {
        points: blobPoints,
        minPoints: blobMinPoints,
        maxPoints: blobMaxPoints,
        center: blobCenter,
        tracks: tracks
    }
  }

  // Given a value, "t", between 0 and 1, return a point between the starting position and end position.
  pointAt(t, startPos, endPos) {
    let delta = new Group(startPos, endPos);
    let value = Shaping.sineInOut(t, 1);
    return delta.interpolate(value);
  }

  componentDidUpdate() {}

  // Override PtsCanvas' start function
  start(space, bound) {
    this._create()
  }

  // Override PtsCanvas' resize function
  resize() {
    this._create()
  }

  // Override PtsCanvas' animate function
  animate(time, ftime) {
    this.follower = this.follower.add(this.getMousePt().$subtract(this.follower).divide(20));
    let t = Num.cycle((time % 7000) / 7000);
    let rotateT = Shaping.cubicInOut((time % 7000) / 7000);
    // Make the blob rotate around the follower.
    let pointCollections = [this.blob.minPoints, this.blob.maxPoints, this.blob.center];
    pointCollections.forEach(group => {
      Geom.rotate2D(group, (0.001), this.follower)
    });
    // Make the blob "breath" in by moving the points along their tracks.
    let temp = new Group();
    for (let i = 0; i < this.blob.minPoints.length; i++) {
      temp.push(this.pointAt(t, this.blob.minPoints[i], this.blob.maxPoints[i]));
    }
    // Why do we have to close the curve this way?
    temp.push(temp.p1);
    temp.push(temp.p2);
    temp.push(temp.p3);
    
    this.form.fillOnly(ColorScheme.secondary).line(Curve.bspline(temp, 10));
    
    if (showWidgets) {
        this.form.fillOnly("blue").point(this.follower, 8, "circle");
        
        this.form.strokeOnly("purple", 1).lines(this.blob.tracks);
        this.form.fillOnly("purple").points(this.blob.minPoints);
        this.form.fillOnly("red").points(this.blob.maxPoints);
        this.form.fillOnly("yellow").points(temp, 3, "square")
        
        this.form.fill("black").text(new Pt([10, 20]), "t: " + t);
        this.form.fill("black").text(new Pt([10, 40]), "rotateT: " + rotateT);
    }
  }
}
