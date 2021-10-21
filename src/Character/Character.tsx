import React from 'react'
import * as S from './styles'

const SIZE = 30
// map 480x480 / 30 = 16x16
type CharacterType = {
  x: number
  y: number
}

export default function Character({ x, y }: CharacterType) {
  return <S.Container size={SIZE} left={x * SIZE} top={y * SIZE}></S.Container>
}
