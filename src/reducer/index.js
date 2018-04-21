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

const placeRandomNumber = (solution, x, y) => {
  const offsets = [
    ({x, y}) => ({x, y: y+1}),
    ({x, y}) => ({x: x+1, y}),
    ({x, y}) => ({x, y: y-1}),
    ({x, y}) => ({x: x-1, y}),
  ]

  // Traces in offset set direction, collects numbers until it hits a wall
  const getNums = (offset, pos, nums) => {
    if (solution[pos.y] === undefined || solution[pos.y][pos.x] === undefined)
      return nums
    const num = solution[pos.y][pos.x]
    return getNums(offset, offset(pos), [...nums, num])
  }

  // Apply to all 4 directions
  const numbers = offsets.reduce(
    (nums, offset) => getNums(offset, ({x, y}), nums), []
  )

  const remaining = numbers.reduce(
    (nums, val) => {
      const i = nums.findIndex(a => a === val)
      if (i === -1) return nums
      let n = [...nums]
      n.splice(i, 1) // Removes element, don't return this
      return n
    },
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  )

  const newVal = remaining[
    Math.floor(Math.random() * remaining.length)
  ]

  const arrSet = (arr, i, val) => Object.assign(arr, {[i]: val})

  return arrSet(
    solution,
    y,
    arrSet(
      solution[y],
      x,
      newVal
    )
  )
}

const randomFill = (solution, x, y) => {
  if (solution[y][x] === 0)
    return randomFill(
      placeRandomNumber(solution, x, y),
      x, y
    )

  if (x === solution[y].length - 1) {
    if (y === solution.length - 1)
      return solution
    return randomFill(solution, 0, y+1)
  }

  return randomFill(solution, (x + 1), y)
}

const defaultSolution = ((size = 10) =>
  randomFill(
    map2d(
      [
        Array(size).fill(0),
        ...(Array(size-1).fill( [ 0, ...Array(size-1).fill(1) ] ))
      ],
      val => (val === 1) && (0.25 < Math.random()) ? 0 : undefined
    ),
    0, 0
  )
)()

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
