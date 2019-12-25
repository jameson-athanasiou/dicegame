import React from 'react'
import styled from 'styled-components'

const TileUnstyled = ({ className }) => <span className={className}>tile</span>

const Tile = styled(TileUnstyled)`
  height: 50px;
  width: 50px;
  border: 1px solid black;
`

export default Tile
