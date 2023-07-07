export const filterFn = function (cb) {
  const resultArr = [];

  if (typeof cb !== "function")
    throw Error("A function would be needed for this polyfill to work");

  for (let i = 0; i < this.length; i++) {
    const filterItem = cb(this[i], i, this); // will take the item, index and the array as args.
    if (filterItem) resultArr.push(this[i]);
  }

  return resultArr;
};
