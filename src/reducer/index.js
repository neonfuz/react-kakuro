import { map2d } from '../util';

const genLabels = (solution) => {
  let labels = solution.map((row)=>
    row.map(()=>({}))
  )

  map2d(
    solution,
    (cell, x, y) => {
      if (cell) {
        for (let X = x; X >= 0; --X)
          if (solution[y][X] === undefined) {
            labels[y][X].rightNum = (labels[y][X].rightNum || 0) + solution[y][x]
            break;
          }
        for (let Y = y; Y >= 0; --Y)
          if (solution[Y][x] === undefined) {
            labels[Y][x].downNum = (labels[Y][x].downNum || 0) + solution[y][x]
            break;
          }
      }
    }
  )

  return Object.freeze(labels)
}

const defaultSolution = map2d(
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 0, 0, 2, 0, 0, 0],
    [0, 3, 1, 4, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ],
  val => val || undefined
  // Turn zeros to undefined
  // For convenience of editing
);

const stateFromSolution = solution => ({
  solution,
  labels: genLabels(solution),
  boardSize: {
    width: solution[0].length,
    height: solution.length,
  },
})

const defaultState = stateFromSolution(defaultSolution)

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    default: return state
  }
}
