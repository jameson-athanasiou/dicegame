import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import { random } from 'lodash-es'
import Tile from 'components/Tile'

const territories = ['blue', 'red', 'green', 'yellow']
const determineInitialDice = () => random(1, 8)

const rollDice = diceCount => Array.from(Array(diceCount)).reduce(acc => acc + random(1, 6), 0)

const AppUnstyled = ({ className }) => {
  const [initialSelection, selectTerritory] = useState()
  const [diceTracker, updateDice] = useState({
    blue: determineInitialDice(),
    red: determineInitialDice(),
    green: determineInitialDice(),
    yellow: determineInitialDice(),
  })
  console.log({ initialSelection, diceTracker })

  const fight = (attacker, defender) => {
    const attackerDice = diceTracker[attacker]
    const defenderDice = diceTracker[defender]

    const attackerScore = rollDice(attackerDice)
    const defenderScore = rollDice(defenderDice)

    selectTerritory(null)
    console.log({ attackerScore, defenderScore })

    return attackerScore > defenderScore ? attacker : defender
  }

  const handleClick = territory => {
    console.log({ clicked: territory, initialSelection })
    if (initialSelection === territory) {
      selectTerritory(null)
    } else if (initialSelection) {
      const winner = fight(initialSelection, territory)
      console.log({ winner })
    } else {
      selectTerritory(territory)
    }
  }

  return (
    <div className={className}>
      {territories.map(name => (
        <Tile key={name} name={name} dice={diceTracker[name]} handleClick={() => handleClick(name)} />
      ))}
    </div>
  )
}

const App = styled(AppUnstyled)`
  color: blue;
  width: 100%;
`

export default hot(module)(App)
