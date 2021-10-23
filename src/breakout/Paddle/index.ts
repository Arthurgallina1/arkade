function Paddle(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  paddleProps: any,
) {
  class Paddle {
    x: number
    y: number
    height: number
    width: number
    broke: boolean

    //only x because Y is always set
    constructor(x: number) {
      this.x = x
      this.y = canvas.height - 30
      this.height = 20
      this.width = paddleProps.width
      this.broke = false
    }
    // path list of points connected by lines
    move() {
      ctx.beginPath() //stars new path deleiting list of sub paths
      ctx.rect(this.x, this.y, this.width, this.height) // adds a rectangle to current path
      //(its doenst draw to draw fill or stroke)
      // to create and draw fillRect and strokeRect
      ctx.fillStyle = this.broke ? 'white' : 'red'
      ctx.strokeStyle = this.broke ? 'white' : 'red'
      ctx.lineWidth = 1
      ctx.shadowBlur = 0
      ctx.shadowColor = 'blue'

      //   ctx.strokeRect(this.x, this.y, this.width, this.height)
      ctx.fill()
    }
  }

  let paddle = new Paddle(paddleProps.x)
  paddle.move()
  if (paddleProps.x <= 0) {
    paddleProps.x = 0
  } else if (paddleProps.x + paddleProps.width >= canvas.width) {
    paddleProps.x = canvas.width - paddleProps.width
  }
}

export default Paddle
