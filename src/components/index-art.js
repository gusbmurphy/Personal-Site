import {
  Pt,
  Group,
  Line,
  Create,
  Sound,
  Triangle,
  Const,
  Geom,
  Rectangle,
  Color,
  Num,
  Circle
} from "pts/dist/es5"
import { PtsCanvas } from "react-pts-canvas"

export class AnimationExample extends PtsCanvas {
  constructor() {
    super()
    this.noiseGrid = []
  }

  _create() {
    // Create a line and a grid, and convert them to `Noise` points
    let gd = Create.gridPts(this.space.innerBound, 20, 20)
    this.noiseGrid = Create.noisePts(gd, 0.05, 0.1, 20, 20)
  }

  componentDidUpdate() {
    if (this.props.pause) {
      this.space.pause()
    } else {
      this.space.resume()
    }
  }

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
    if (!this.noiseGrid) return

    // Use pointer position to change speed
    let speed = this.space.pointer
      .$subtract(this.space.center)
      .divide(this.space.center)
      .abs()

    // Generate noise in a grid
    this.noiseGrid.forEach(p => {
      p.step(0.01 * (1 - speed.x), 0.01 * (1 - speed.y))
      this.form
        .fillOnly("#123")
        .point(p, Math.abs((p.noise2D() * this.space.size.x) / 18), "circle")
    })
  }
}

export class PyramidCells extends PtsCanvas {
  constructor() {
    super()
    this.grid = []
    // this.follower = null
  }

  _create() {
    this.grid = Create.gridCells(this.space.innerBound, 20, 20)
    this.follower = this.space.center
  }

  //   componentDidUpdate() {
  //     if (this.props.pause) {
  //       this.space.pause()
  //     } else {
  //       this.space.resume()
  //     }
  //   }

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
    if (!this.grid) return

    this.follower = this.follower.add(this.space.pointer.$subtract(this.follower).divide(20))

    this.grid.map(p => {
      let mag = this.follower.$subtract(Rectangle.center(p)).magnitude()
      let scale = Math.min(1, Math.abs(1 - (0.9 * mag) / this.space.center.y))
      let r = Rectangle.fromCenter(Rectangle.center(p), Rectangle.size(p))

      let corners = Rectangle.corners(r)
      let triangles = []

      for (let i = 0; i < 4; i++) {
        triangles.push(
          new Group(Rectangle.center(p), corners[i], corners[i < 3 ? i + 1 : 0])
        )
      }

      let f1 = Color.HSLtoRGB(Color.hsl(220, 1, scale * 0.5 + 0.2)).hex
      let s1 = Color.HSLtoRGB(Color.hsl(220, 1, scale * 0.7 + 0.2)).hex
      let f2 = Color.HSLtoRGB(Color.hsl(220, 1, scale * 0.2 + 0.1)).hex
      let s2 = Color.HSLtoRGB(Color.hsl(220, 1, scale * 0.3 + 0.1)).hex

      this.form
        .fill(f1)
        .stroke(f1)
        .polygons([triangles[0], triangles[1]])
      this.form
        .fill(f2)
        .stroke(f2)
        .polygons([triangles[2], triangles[3]])
    })
  }
}

export class PointerInteraction extends PtsCanvas {
  constructor(props) {
    super(props)
    this.colors = [
      /*salmon*/ "#f65c78",
      /*orange*/ "#ffd271",
      /*cream*/ "#fff3af",
      /*green*/ "#c3f584",
      /*bg*/ "#edf7fa"
    ];
    this.state = {mousePos: new Pt([this.props.mousePos.x, this.props.mousePos.y])}
    // this.onMouseMove = this.onMouseMove.bind(this);
    this.getMousePos = this.getMousePos.bind(this);
  }

  // onMouseMove(e) {
  //   this.setState({mousePos: new Pt([e.clientX, e.clientY])});
  // }

  _create() {
  }

  // Override PtsCanvas' start function
  start(space, bound) {
    this._create()
  }

  // Override PtsCanvas' resize function
  resize() {
    this._create()
  }

  getMousePos() {
    return new Pt([this.props.mousePos.x, this.props.mousePos.y]);
  }

  // Override PtsCanvas' animate function
  animate(time, ftime) {
    let t = Num.cycle((time % 5000) / 5000);

    let centerPoints = [
      new Pt([this.space.height * (1 / 4), this.space.width * (1 / 4)]),
      new Pt([this.space.height * (1 / 4), this.space.width * (3 / 4)]),
      new Pt([this.space.height * (3 / 4), this.space.width * (3 / 4)]),
      new Pt([this.space.height * (3 / 4), this.space.width * (1 / 4)])
    ];
    
    // Calculate each center points distance to the cursor.
    let cpDistance = centerPoints.map(cp => Line.magnitude([cp, this.getMousePos()]));
    // Draw circles.
    let circles = [];
    for (let i = 0; i < centerPoints.length; i++) {
      let circle = Circle.fromCenter(centerPoints[i], this.space.width * (1 / 10) * (t + 1) * (cpDistance[i] / 700) + 30);
      this.form.fillOnly(this.colors[i]).circle(circle);
      circles.push(circle);
    }
    // Draw lines from center points and get intersections.
    centerPoints.forEach(point => {
      let line = [point, this.getMousePos()];
      this.form.strokeOnly("blue", 3, "round", "round").line(line);

      let inters = [];
      circles.forEach(circle => {
        Circle.intersectLine2D(circle, line).forEach(intersection =>
          inters.push(intersection)
        );
      });
      // Draw intersection circles.
      inters.forEach(intersection => {
        this.form.fillOnly("black").circle(Circle.fromCenter(intersection, 5));
      });
    })
  }
}
