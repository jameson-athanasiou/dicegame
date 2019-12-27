import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import { get, random } from 'lodash-es'
import Tile from 'components/Tile'
import mapGenerator from 'util/mapGenerator'

const countries = ['cornflowerblue', 'indianred', 'mediumaquamarine', 'bisque']

const rollDice = diceCount => Array.from(Array(diceCount)).reduce(acc => acc + random(1, 6), 0)

const AppUnstyled = ({ className }) => {
  const [initialSelection, selectTerritory] = useState([])
  const [mapManager, updateMap] = useState(mapGenerator(countries))

  const fight = (attacker, defender) => {
    const [attackerRow, attackerColumn] = attacker
    const [defenderRow, defenderColumn] = defender

    const attackerDice = mapManager[attackerRow][attackerColumn].dice
    const defenderDice = mapManager[defenderRow][defenderColumn].dice

    const attackerScore = rollDice(attackerDice)
    const defenderScore = rollDice(defenderDice)

    selectTerritory([])
    console.log({ attackerScore, defenderScore })

    return attackerScore > defenderScore ? attacker : defender
  }

  const isBorderTerritory = (initial, current) => {
    const [initialRow, initialColumn] = initial
    const [currentRow, currentColumn] = current
    const north = get(mapManager, `[${initialRow + 1}][${initialColumn}]`)
    const south = get(mapManager, `[${initialRow - 1}][${initialColumn}]`)
    const east = get(mapManager, `[${initialRow}][${initialColumn - 1}]`)
    const west = get(mapManager, `[${initialRow}][${initialColumn + 1}]`)

    console.log({ north, south, east, west })

    const currentSelection = mapManager[currentRow][currentColumn]
    return [north, south, east, west].includes(currentSelection)
  }

  const handleClick = (territory, row, column) => {
    const [initialRow, initialColumn] = initialSelection
    const currentSelection = [row, column]
    if (initialRow === row && initialColumn === column) {
      selectTerritory([])
    } else if (initialRow && initialColumn) {
      if (!isBorderTerritory(initialSelection, currentSelection)) {
        selectTerritory([])
      } else {
        const [winnerRow, winnerColumn] = fight(initialSelection, currentSelection)
        console.log({ winner: mapManager[winnerRow][winnerColumn].country })
      }
    } else {
      selectTerritory(currentSelection)
    }
  }

  const [initialRow, initialColumn] = initialSelection

  return (
    <div className={className}>
      {mapManager.map((row, rowIndex) =>
        row.map(({ country, dice }, columnIndex) => (
          <Tile
            key={`${country} + ${dice} + ${(rowIndex, columnIndex)}`}
            name={country}
            dice={dice}
            isSelected={initialRow === rowIndex && initialColumn === columnIndex}
            handleClick={() => handleClick(country, rowIndex, columnIndex)}
          />
        ))
      )}
    </div>
  )
}

const App = styled(AppUnstyled)`
  width: 100%;
`

export default hot(module)(App)
