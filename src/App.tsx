import React from 'react'
import * as S from './App.styles'
import Character from './Character/Character'

function App() {
  return (
    <S.Container>
      <S.Map>
        <Character x={30} y={30} />
      </S.Map>
    </S.Container>
  )
}

export default App
