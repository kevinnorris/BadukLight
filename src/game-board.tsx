import React from 'react'
import styled from 'styled-components'

import Intersection from './intersection'

const BOARD_SIZE = 19

const STAR_POINTS_BY_SIZE = {
  9: {
    2: [2, 6],
    4: [4],
    6: [2, 6],
  },
  13: {
    3: [3, 9],
    6: [6],
    9: [3, 9],
  },
  19: {
    3: [3, 9, 15],
    9: [3, 9, 15],
    15: [3, 9, 15],
  },
}

const Grid = styled.div`
  display: grid;
  width: 90vh;
  height: 90vh;
  margin: auto;
  grid-template-columns: ${(props) => `repeat(${props.size}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.size}, 1fr)`};
`

const blocks = []
for (let rowIndex = 0; rowIndex < BOARD_SIZE; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < BOARD_SIZE; columnIndex += 1) {
    blocks.push(
      <Intersection
        connectsLeft={columnIndex !== 0}
        connectsRight={columnIndex !== BOARD_SIZE - 1}
        connectsTop={rowIndex !== 0}
        connectsBottom={rowIndex !== BOARD_SIZE - 1}
        starPoint={STAR_POINTS_BY_SIZE[BOARD_SIZE][rowIndex]?.includes(
          columnIndex
        )}
      />
    )
  }
}

const GameBoard = (): React.ReactElement => (
  <Grid size={BOARD_SIZE}>{...blocks}</Grid>
)

export default GameBoard
