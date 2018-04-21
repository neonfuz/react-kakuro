const flatten = arr => Array.prototype.reduce.bind(arr)((a, b) =>
  Array.prototype.concat(a,b)
)

const map2d = (arr, cb) =>
  arr.map((row, y) =>
    row.map((val, x) =>
      cb(val, x, y, arr)
    )
  )

const equals = a => b => a === b
const arrSet = (arr, i, val) => Object.assign(arr, {[i]: val})

export { flatten, map2d, equals, arrSet };
