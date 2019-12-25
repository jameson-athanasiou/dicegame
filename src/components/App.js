import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import Tile from 'components/Tile'

const countries = ['blue', 'red', 'green', 'yellow']

const AppUnstyled = ({ className }) => {
  return (
    <div className={className}>
    hey bear
      {countries.map(name => (
        <Tile key={name} />
      ))}
    </div>
  )
}

const App = styled(AppUnstyled)`
  color: blue;
  width: 100%;
`

export default hot(module)(App)
