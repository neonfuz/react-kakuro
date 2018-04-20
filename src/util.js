const flatten = arr => Array.prototype.reduce.bind(arr)((a, b) =>
  Array.prototype.concat(a,b)
)

const map2d = (arr, cb) =>
  arr.map((row, y) =>
    row.map((val, x) =>
      cb(val, x, y, arr)
    )
  )

export { flatten, map2d };
