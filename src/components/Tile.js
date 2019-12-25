import React from 'react'
import styled from 'styled-components'

const TileUnstyled = ({ className, handleClick, name }) => (
  <div className={className} onClick={handleClick}>
    {name}
  </div>
)

const Tile = styled(TileUnstyled)`
  height: 100px;
  width: 100px;
  border: 1px solid black;
  float: left;
`

export default Tile
