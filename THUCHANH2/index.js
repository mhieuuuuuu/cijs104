import * as utils from "./utils.js";
console.log(utils.countOccurrences([2, 1, 2, 1, 2], 2));
console.log(utils.removeDuplicates([1, 2, 2, 2, 3, 4, 5, 5]));
console.log(
  utils.flattenArray([
    [1, 2],
    [3, 4],
  ])
);
console.log(utils.isSymmetric([1, 2, 3, 2, 1]));
console.log(utils.findSecondLargest([1, 3, 2, 4, 5]));
console.log(
  utils.sortProductsByPrice([
    { name: "Product A", price: 30 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 50 },
  ])
);
console.log(
  utils.findMostExpensiveProduct([
    { name: "Product A", price: 30 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 50 },
  ])
);
console.log(
  utils.groupByType([
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" },
    { type: "fruit", name: "banana" },
  ])
);
console.log(utils.isSubset([1, 2, 3, 4], [2, 4]));
console.log(utils.findMaxKey({ a: 10, b: 20, c: 15 }));
console.log(utils.mergeObjectsSumValues({ a: 10, b: 20 }, { b: 30, c: 40 }));
