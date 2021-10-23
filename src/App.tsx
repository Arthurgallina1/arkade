import React, { useEffect } from 'react'
import * as S from './App.styles'
import Breakout from './breakout'
import Canvas from './Canvas'
import Character from './Character/Character'
import useCharacter from './hooks/useCharacter'

function App() {
  const char1 = useCharacter('Art')

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char1.moveLeft()
        break
      case 'KeyW':
      case 'ArrowUp':
        char1.moveUp()
        break
      case 'KeyD':
      case 'ArrowRight':
        char1.moveRight()
        break
      case 'KeyS':
      case 'ArrowDown':
        char1.moveDown()
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <S.Container>
      {/* <S.Map>
        <Character
          x={char1.x}
          y={char1.y}
          side={char1.side}
          name={char1.name}
        />
      </S.Map> */}

      {/* <Canvas height='500' width='500' /> */}

      <Breakout />
    </S.Container>
  )
}

export default App
