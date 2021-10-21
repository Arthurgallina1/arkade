import React from 'react'
import { CharacterSides } from '../types/Character'
import * as S from './styles'

const SIZE = 30
// map 480x480 / 30 = 16x16
const SIDES = {
  down: 0,
  left: -30,
  right: -60,
  up: -90,
}

type CharacterType = {
  x: number
  y: number
  side: CharacterSides
  name: string
}

export default function Character({ x, y, side, name }: CharacterType) {
  return (
    <S.Container
      size={SIZE}
      left={x * SIZE}
      top={y * SIZE}
      sidePos={SIDES[side] ?? 0}
    >
      {name}
    </S.Container>
  )
}
