import React, { useEffect, useState } from 'react'

export default function useCharacter() {
  const [pos, setPos] = useState({ x: 1, y: 5 })

  useEffect(() => {
    console.log(pos)
  }, [pos])

  const moveLeft = () => {
    setPos((pos) => ({ y: pos.y, x: pos.x - 1 }))
  }

  const moveRight = () => {
    setPos((pos) => ({ y: pos.y, x: pos.x + 1 }))
  }

  const moveDown = () => {
    setPos((pos) => ({ y: pos.y - 1, x: pos.x }))
  }

  const moveUp = () => {
    setPos((pos) => ({ y: pos.y + 1, x: pos.x }))
  }

  return {
    x: pos.x,
    y: pos.y,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
  }
}
