import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import Tile from 'components/Tile'

const territories = ['blue', 'red', 'green', 'yellow']

const AppUnstyled = ({ className }) => {
  const [initialSelection, selectTerritory] = useState()
  console.log({ initialSelection })

  const handleClick = territory => {
    console.log({ clicked: territory, initialSelection })
    if (initialSelection === territory) {
      selectTerritory(null)
    } else {
      selectTerritory(territory)
    }
  }

  return (
    <div className={className}>
      {territories.map(name => (
        <Tile key={name} name={name} handleClick={() => handleClick(name)} />
      ))}
    </div>
  )
}

const App = styled(AppUnstyled)`
  color: blue;
  width: 100%;
`

export default hot(module)(App)
