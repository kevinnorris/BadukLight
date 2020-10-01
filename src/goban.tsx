import React, { useState, ReactElement } from 'react'
import styled from 'styled-components'

import Intersection from './intersection'
import {
  IntersectionValue,
  getNewPosition,
  getStartingPosition,
} from './position'

const BOARD_SIZE = 9

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

const getIntersectionLabel = (
  rowIndex: number,
  columnIndex: number,
  boardSize: number,
  intersectionValue: IntersectionValue
): string => {
  const gridLabel = `${String.fromCharCode(65 + columnIndex)}${
    boardSize - rowIndex
  }`

  if (intersectionValue === 0) {
    return gridLabel
  }

  return `${gridLabel} ${intersectionValue === 1 ? 'Black' : 'White'}`
}

const Goban = (): ReactElement => {
  const [position, setPosition] = useState(getStartingPosition(BOARD_SIZE))

  const placeStone = (rowIndex: number, columnIndex: number) => () => {
    const newPosition = getNewPosition(position, rowIndex, columnIndex, 1)
    setPosition(newPosition)
  }

  const clearBoard = () => {
    setPosition(getStartingPosition(BOARD_SIZE))
  }

  return (
    <>
      <Grid size={BOARD_SIZE}>
        {position.reduce<ReactElement[]>((acc, row, rowIndex) => {
          row.forEach((intersectionValue, columnIndex) =>
            acc.push(
              <Intersection
                connectsBottom={rowIndex !== BOARD_SIZE - 1}
                connectsLeft={columnIndex !== 0}
                connectsRight={columnIndex !== BOARD_SIZE - 1}
                connectsTop={rowIndex !== 0}
                key={`${rowIndex}:${columnIndex}`}
                label={getIntersectionLabel(
                  rowIndex,
                  columnIndex,
                  BOARD_SIZE,
                  intersectionValue
                )}
                placeStone={placeStone(rowIndex, columnIndex)}
                starPoint={STAR_POINTS_BY_SIZE[BOARD_SIZE][rowIndex]?.includes(
                  columnIndex
                )}
                stone={intersectionValue}
              />
            )
          )

          return acc
        }, [])}
      </Grid>

      <button onClick={clearBoard}>Clear Board</button>
    </>
  )
}

export default Goban
