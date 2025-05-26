import * as utils from "./utils.js";
const user = { name: "Nam", age: 30 };
console.log(
  utils.nameList([
    { name: "Nam", age: 30 },
    { name: "Hoa", age: 20 },
  ])
);

console.log(utils.showUserInfo(user));
console.log(utils.isPrime(17));
console.log(utils.repeatString("Hello", 3));
console.log(utils.formatDate("2024-11-28"));
console.log(utils.sortAsc([2, 1, 3, 5, 4]));
