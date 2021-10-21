import React, { useEffect } from 'react'
import * as S from './App.styles'
import Character from './Character/Character'
import useCharacter from './hooks/useCharacter'

function App() {
  const { x, y, moveUp, moveDown } = useCharacter()

  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(e.code)
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        break
      case 'KeyW':
      case 'ArrowUp':
        break
      case 'KeyD':
      case 'ArrowRight':
        break
      case 'KeyS':
      case 'ArrowDown':
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <S.Container>
      <S.Map>
        <Character x={x} y={y} />
      </S.Map>
      <div>
        <button onClick={moveUp}>UP</button>
        <button onClick={moveDown}>Down</button>
      </div>
    </S.Container>
  )
}

export default App
