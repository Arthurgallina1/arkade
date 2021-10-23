export default function WallColision(ballObj: any, canvas: HTMLCanvasElement) {
  if (ballObj.y - ballObj.rad < 0 || ballObj.y + ballObj.rad > canvas.height) {
    ballObj.dy *= -1 //deflect to diferent direction
  }

  if (ballObj.x + ballObj.rad >= canvas.width || ballObj.x - ballObj.rad <= 0) {
    ballObj.dx *= -1 //deflect to diferent direction
  }
}