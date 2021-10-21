import styled from 'styled-components'
import { CharacterSides } from '../types/Character'

export const Container = styled.div<{
  size: number
  left: number
  top: number
  sidePos: number
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  /* background-color: red; */
  background-image: url(/assets/char.png);
  background-position: 0px ${(props) => props.sidePos}px; //-30px pra virar gambi
`
