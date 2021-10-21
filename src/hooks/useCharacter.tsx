import React, { useState } from 'react'
import { CharacterSides } from '../types/Character'
import { mapSpots } from '../mapSpots'

export default function useCharacter(initialName: any) {
  console.log(initialName)
  const [pos, setPos] = useState({ x: 1, y: 5 })
  const [name, setName] = useState(initialName)
  const [side, setSide] = useState<CharacterSides>(CharacterSides.DOWN)

  const moveLeft = () => {
    setPos((pos) => ({
      y: pos.y,
      x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
    }))
    setSide(CharacterSides.LEFT)
  }

  const moveRight = () => {
    setPos((pos) => ({
      y: pos.y,
      x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
    }))
    setSide(CharacterSides.RIGHT)
  }

  const moveDown = () => {
    setPos((pos) => ({
      y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y,
      x: pos.x,
    }))
    setSide(CharacterSides.DOWN)
  }

  const moveUp = () => {
    setPos((pos) => ({
      y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y,
      x: pos.x,
    }))
    setSide(CharacterSides.UP)
  }

  const canMove = (x: number, y: number): boolean => {
    if (x < 0 || y < 0) return false //outside map
    if (mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
      if (mapSpots[y][x] === 1) return true // block
    }

    return false
  }

  return {
    x: pos.x,
    y: pos.y,
    side,
    name,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
  }
}
