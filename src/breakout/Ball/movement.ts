class Ball {
  x: number
  y: number
  rad: number

  constructor(x: number, y: number, rad: number) {
    this.x = x
    this.y = y
    this.rad = rad
  }

  draw(ctx: any) {
    ctx.beginPath()
    ctx.fillStyle = 'red'
    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI)
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.fill()
    ctx.stroke()
  }
}

export function BallMovement(ctx: CanvasRenderingContext2D, ballObj: any) {
  let data = new Ball(ballObj.x, ballObj.y, ballObj.rad)
  data.draw(ctx)
  ballObj.x += ballObj.dx
  ballObj.y += ballObj.dy
}
