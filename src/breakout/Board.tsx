import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { BallMovement } from './Ball/movement'
import data from './data'
import WallColision from './util/WallColision'

const BoardContainer = styled.canvas`
  background: lightblue;
`

export default function Board() {
  const canvasRef = useRef<any>(null)
  const { ballObj } = data

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas ? canvas.getContext('2d') : null
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      BallMovement(ctx, ballObj)
      WallColision(ballObj, canvas)
      requestAnimationFrame(render)
    }

    render()
  }, [])

  return <BoardContainer ref={canvasRef} height={500} width={750} />
}
