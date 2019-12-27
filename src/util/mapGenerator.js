import { random, times } from 'lodash-es'

const determineInitialDice = () => random(1, 8)

const generateMap = countries => {
  const count = countries.length
  const options = countries.map(name => ({
    name,
    territories: random(3, 5),
  }))
  const result = []
  times(4, () =>
    result.push(
      Array.from(Array(4)).map(() => ({
        country: countries[random(0, count - 1)],
        dice: determineInitialDice(),
      }))
    )
  )
  return result
}

export default generateMap
