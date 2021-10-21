import React, { useState } from 'react'
import { CharacterSides } from '../types/Character'

export default function useCharacter() {
  const [pos, setPos] = useState({ x: 1, y: 5 })
  const [side, setSide] = useState<CharacterSides>(CharacterSides.DOWN)

  const moveLeft = () => {
    setPos((pos) => ({ y: pos.y, x: pos.x - 1 }))
    setSide(CharacterSides.LEFT)
  }

  const moveRight = () => {
    setPos((pos) => ({ y: pos.y, x: pos.x + 1 }))
    setSide(CharacterSides.RIGHT)
  }

  const moveDown = () => {
    setPos((pos) => ({ y: pos.y + 1, x: pos.x }))
    setSide(CharacterSides.DOWN)
  }

  const moveUp = () => {
    setPos((pos) => ({ y: pos.y - 1, x: pos.x }))
    setSide(CharacterSides.UP)
  }

  return {
    x: pos.x,
    y: pos.y,
    side,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
  }
}
