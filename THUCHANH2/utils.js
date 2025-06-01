//1
export const sumArray = (arr) => {
  let outs = 0;
  for (let i = 0; i < arr.length; i++) {
    outs += arr[i];
  }
  return outs;
};

//2
export const countOccurrences = (arr, value) => {
  return arr.filter((el) => el == value).length;
};

//3
//outs.includes(value)
//set
export const removeDuplicates = (arr) => {
  let outs = new Set(arr);
  return new Array(...outs);
};
//hash table

//4
export const flattenArray = (arr) => {
  //   let outs = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr[i].length; j++) {
  //       outs.push(arr[i][j]);
  //     }
  //   }
  //   return outs;
  return arr.flat();
};

//5
export const isSymmetric = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    if (arr[l] != arr[r]) return false;
    l += 1;
    r -= 1;
  }
  return true;
};

//6
export const findSecondLargest = (arr) => {
  arr.sort();
  arr.reverse();
  return arr[1];
};

//7
export const sortProductsByPrice = (products) => {
  let outs = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < i; j++) {
      if (outs[j].price > products[i].price) {
        outs.splice(j, 0, products[i]);
        break;
      }
    }
    if (outs.length < i + 1) outs.push(products[i]);
  }
  return outs;
};

//8
export const findMostExpensiveProduct = (products) => {
  if (products.length == 1) return products[0];
  let outs = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > outs.price) outs = products[i];
  }
  return outs;
};

//9
export const groupByType = (arr) => {
  let outs = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type in outs) outs[arr[i].type].push(arr[i].name);
    else outs[arr[i].type] = [arr[i].name];
  }
  return outs;
};

//10
export const isSubset = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) continue;
    else return false;
  }
  return true;
};

//11
export const findMaxKey = (obj) => {
  let outs = Object.keys(obj)[0];
  for (let key in obj) {
    if (obj[key] > obj[outs]) outs = key;
  }
  return outs;
};

//12
export const mergeObjectsSumValues = (obj1, obj2) => {
  for (let key in obj2) {
    if (Object.keys(obj1).includes(key)) obj1[key] += obj2[key];
    else obj1[key] = obj2[key];
  }
  return obj1;
};

//13
export const countElements = (arr) => {
  let outs = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in outs) outs[arr[i]] += 1;
    else outs[arr[i]] = 1;
  }
  return outs;
};

//14
export const cleanObject = (obj) => {
  for (let key in obj) {
    if (obj[key] == null || obj[key] == undefined) delete obj[key];
  }
  return obj;
};

//15
export const hasDuplicate = (arr) => {
  let outs = new Set(arr);
  return outs.size != arr.length;
};

//16
export const sumByGroup = (arr) => {
  let outs = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type in outs) outs[arr[i].type] += arr[i].price;
    else outs[arr[i].type] = arr[i].price;
  }
  return outs;
};

//17
export const uniqueValues = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

//18
export const isPermutation = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;
  let sorted1 = arr1.sort();
  let sorted2 = arr2.sort();
  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] != sorted2[i]) return false;
  }
  return true;
};

//19
export const findLongestString = (arr) => {
  let outs = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > outs.length) outs = arr[i];
  }
  return outs;
};

//20
export const intersection = (arr1, arr2) => {
  let outs = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) outs.push(arr1[i]);
  }
  return outs;
};

//21
export const filterByMinValue = (arr, minValue) => {
  return arr.filter((el) => el >= minValue);
};

//22
export const findLongestValue = (obj) => {
  let outs = Object.values(obj)[0];
  for (let key in obj) {
    if (obj[key].length > outs.length) outs = obj[key];
  }
  return outs;
};

//23
export const groupByFirstLetter = (arr) => {
  let outs = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] in outs) outs[arr[i][0]].push(arr[i]);
    else outs[arr[i][0]] = [arr[i]];
  }
  return outs;
};

//24
export const getAdults = (people) => {
  return people.filter((el) => el.age >= 18);
};

//25
export const convertToArray = (obj) => {
  let outs = [];
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  for (let i = 0; i < keys.length; i++) {
    outs.push([keys[i], values[i]]);
  }
  return outs;
};

//26
export const sortStringByLength = (arr) => {
  let s = arr.length;
  for (let n = s - 1; n > 0; n--) {
    let swapped = false;
    for (let i = 0; i < n; i++) {
      if (arr[i].length > arr[i + 1].length) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
      if (swapped == false) return arr;
    }
  }
  return arr;
};

//27
export const sumByKey = (arr, key) => {
  let outs = 0;
  for (let i = 0; i < arr.length; i++) {
    outs += arr[i][key];
  }
  return outs;
};

//28
export const countWords = (str) => {
  return str.split(" ").length;
};

//29
export const findMinKey = (obj) => {
  let outs = Object.keys(obj)[0];
  for (let key in obj) {
    if (obj[key] < obj[outs]) outs = key;
  }
  return outs;
};
