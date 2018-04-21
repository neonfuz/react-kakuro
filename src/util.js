const map2d = (arr, cb) =>
  arr.map((row, y) =>
    row.map((val, x) =>
      cb(val, x, y, arr)
    )
  )

const arrSet = (arr, i, val) => Object.assign(arr, {[i]: val})

export { map2d, arrSet };
