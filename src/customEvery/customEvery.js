export const everyFn = function (cb) {

  if (typeof cb !== "function")
  throw Error("A function would be needed for this polyfill to work");

  for (let i = 0; i < this.length; i++) {
    if(!cb(this[i])) return false
  }

  return true
}