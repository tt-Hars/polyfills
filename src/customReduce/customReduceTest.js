import { areResultsSame } from "../util";

export const reduceResultCode = () => {
  const someArr = [1, 2, 3, 4, 5];
  const someArrItemsReducedUsingReduce = someArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const someArrItemsReducedUsingCustomReduce = someArr.customReduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const result = areResultsSame(
    someArrItemsReducedUsingReduce,
    someArrItemsReducedUsingCustomReduce
  );

  console.log(result); // true
  return result;
};
