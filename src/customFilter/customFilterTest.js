import { areResultsSame } from "../util";

export const filterResultCode = () => {
  const someArr = [1, 2, 3, 4, 5];
  const someArrItemsFilteredUsingFilter = someArr.filter(
    (item) => item % 2 === 0
  );
  const someArrItemsFilteredUsingCustomFilter = someArr.customFilter(
    (item) => item % 2 === 0
  );
  const result = areResultsSame(
    someArrItemsFilteredUsingFilter,
    someArrItemsFilteredUsingCustomFilter
  );

  console.log(result); // true
  return result;
};
