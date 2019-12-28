import React from 'react'
import styled from 'styled-components'

const TileUnstyled = ({ className, dice, handleClick, name }) => (
  <div className={className} onClick={handleClick}>
    {dice}
  </div>
)

const Tile = styled(TileUnstyled)`
  height: 100px;
  width: 100px;
  border: 1px solid black;
  float: left;
  background-color: ${({ isSelected, name }) => (isSelected ? 'lightslategrey' : name)};
  text-align: center;
`

export default Tile
