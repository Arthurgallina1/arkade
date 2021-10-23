import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { BallMovement } from './Ball/movement'
import Brick from './Brick'
import data from './data'
import Paddle from './Paddle'
import PlayerStats from './Player'
import BrickCollision from './util/BrickColision'
import PaddleHit from './util/PaddleHit'
import WallColision from './util/WallColision'

const BoardContainer = styled.canvas`
  background: lightblue;
`

let bricks: any = []

export default function Board() {
  const canvasRef = useRef<any>(null)
  const { ballObj, paddleProps, brickObj, player } = data

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas ? canvas.getContext('2d') : null
      paddleProps.y = canvas.height - 30

      let newBrickSet = Brick(2, bricks, canvas, brickObj)

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      PlayerStats(ctx, player, canvas)

      //create bricks
      bricks.map((brick: any) => brick.draw(ctx))

      //colision
      let brickCollision

      for (let i = 0; i < bricks.length; i++) {
        brickCollision = BrickCollision(ballObj, bricks[i])

        if (brickCollision.hit && !bricks[i].broke) {
          // console.log(brickCollision);
          if (brickCollision.axis === 'X') {
            ballObj.dx *= -1
            bricks[i].broke = true
          } else if (brickCollision.axis === 'Y') {
            ballObj.dy *= -1
            bricks[i].broke = true
          }
          player.score += 10
        }
      }

      BallMovement(ctx, ballObj)

      WallColision(ballObj, canvas, player, paddleProps)

      Paddle(ctx, canvas, paddleProps)

      PaddleHit(ballObj, paddleProps)
      requestAnimationFrame(render)
    }

    render()
  }, [])

  return (
    <BoardContainer
      ref={canvasRef}
      height={500}
      width={750}
      onMouseMove={(event) =>
        (paddleProps.x = event.clientX - paddleProps.width / 2)
      }
    />
  )
}
