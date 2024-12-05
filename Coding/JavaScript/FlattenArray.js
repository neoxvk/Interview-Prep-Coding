// Flattern the array
const array = [
  [1, 2],
  [3, 4],
  [5, [6, 7], 8],
  [9, 10],
];

const flatten = [].concat(...array);

const flatMethod = array.flat(2);

function customFlatten(array, depth = 1) {
  let result = [];
  array.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlatten(ar, depth - 1));
    } else {
      result.push(ar);
    }
  });

  return result;
}
console.log(customFlatten(array, 2));
