const map2d = (arr, cb) =>
  arr.map((row, y) =>
    row.map((val, x) =>
      cb(val, x, y, arr)
    )
  )

export { map2d };
