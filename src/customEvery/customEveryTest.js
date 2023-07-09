import { areResultsSame } from "../util";

export const everyResultCode = () => {
  const someArray = [2, 4, 6];

  const checkEven = (n) => n % 2 === 0;

  const resultUsingEvery = someArray.every((item) => checkEven(item));
  const resultUsingCustomEvery = someArray.customEvery((item) =>
    checkEven(item)
  );

  const result = areResultsSame(resultUsingEvery, resultUsingCustomEvery);

  console.log(result) //true

  return result;
};
