import React, { useEffect, useRef } from 'react'
//@ts-ignore
export default function Canvas(props) {
  const canvasRef = useRef<any>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas ? canvas.getContext('2d') : null
    draw(context)

    console.log('draw')
  }, [])

  const draw = (context: any) => {
    context.fillStyle = '#222ddd'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }
  return <canvas ref={canvasRef} {...props} />
}
