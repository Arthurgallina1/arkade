import React, { useEffect } from 'react'
import * as S from './App.styles'
import Character from './Character/Character'
import useCharacter from './hooks/useCharacter'

function App() {
  const char1 = useCharacter()

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
      <S.Map>
        <Character x={char1.x} y={char1.y} side={char1.side} />
      </S.Map>
      <div>
        {/* <button onClick={moveUp}>UP</button>
        <button onClick={moveDown}>Down</button> */}
      </div>
    </S.Container>
  )
}

export default App
