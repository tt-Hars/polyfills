export const reduceFn = function (cb, initialVal) {
  let accumulator, firstIndex = 0
  accumulator = initialVal

  for(let i = firstIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i)
  }

  return accumulator
}