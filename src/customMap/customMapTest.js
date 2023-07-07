import { areResultsSame } from "../util";

export const mapResultCode = () => {
  const someArr = [1, 2, 3, 4, 5];
  const someArrItemsMappedUsingMap = someArr.map((item) => item + 1);
  const someArrItemsMappedUsingCustomMap = someArr.customMap(
    (item) => item + 1
  );
  const result = areResultsSame(
    someArrItemsMappedUsingMap,
    someArrItemsMappedUsingCustomMap
  );

  console.log(result); // true
  return result;
};
