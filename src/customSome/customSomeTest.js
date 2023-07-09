import { areResultsSame } from "../util";

export const someResultCode = () => {
  const someArray = [3, 5, 6];

  const checkEven = (n) => n % 2 === 0;

  const resultUsingSome = someArray.some((item) => checkEven(item));
  const resultUsingCustomSome = someArray.customSome((item) =>
    checkEven(item)
  );

  const result = areResultsSame(resultUsingSome, resultUsingCustomSome);

  console.log(result) //true

  return result;
};
