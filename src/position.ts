export type IntersectionValue = -1 | 0 | 1

export const getStartingPosition = (
  boardSize: number
): IntersectionValue[][] => {
  const position = []
  for (let i = 0; i < boardSize; i += 1) {
    const row = []
    for (let j = 0; j < boardSize; j += 1) {
      row.push(0)
    }
    position.push(row)
  }

  return position
}

export const getNewPosition = (
  position: IntersectionValue[][],
  rowIndex: number,
  columnIndex: number,
  stone: IntersectionValue
): IntersectionValue[][] => {
  const newPosition = []
  for (let i = 0; i < position.length; i += 1) {
    const row = []
    for (let j = 0; j < position[i].length; j += 1) {
      if (i === rowIndex && j === columnIndex) {
        row.push(stone)
      } else {
        row.push(position[i][j])
      }
    }
    newPosition.push(row)
  }

  return newPosition
}
