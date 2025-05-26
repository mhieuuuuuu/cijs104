const productInfo = (name, price) => {
  return `Sản phẩm: ${name}, giá: ${price}`;
};

const greet = (name) => {
  return `Xin chào, ${name}!`;
};

const sumUpTo = (n) => {
  return (n * (n + 1)) / 2;
};

const square = (n) => {
  return n * n;
};

const isEven = (n) => {
  return n % 2 == 0;
};

const firstElement = (arr) => {
  return arr[0];
};

const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

const showUserInfo = (user) => {
  return `Name: ${user.name}, Age: ${user.age}`;
};

const nameList = (arr) => {
  return arr.map((item) => item.name).join(", ");
};

export const stringLength = (str) => {
  return str.length;
};

export const toUpperCase = (str) => {
  return str.toUpperCase();
};

export const formatCurrency = (number) => {
  return number.toLocaleString("vi-VN", { style: "currency", currency: "VNĐ" });
};

export const max = (arr) => {
  return Math.max(arr);
};

export const isPrime = (n) => {
  if (n < 2) return false;
  if (n == 2) return true;
  let nsqrt = Math.round(Math.pow(n, 0.5)) + 1;
  for (let i = 2; i < nsqrt; i++) {
    if (n % i == 0) return false;
  }
  return true;
};

export const repeatString = (str, n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(str);
  }
  return arr.join(" ");
};

export const sumOdd = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) total += arr[i];
  }
  return total;
};

export const sumGreaterThan = (arr, n) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > n) return true;
  return false;
};

export const formatDate = (str) => {
  return str.split("-").reverse().join("/");
};

export const firstThree = (arr) => {
  return arr.slice(2);
};

export const containsChar = (str, c) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == c) return true;
  }
  return false;
};

export const mergeArrays = (a1, a2) => {
  return a1.concat(a2);
};

export const countOccurrences = (a, n) => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] == n) count++;
  }
  return count;
};

export const filterOdd = (a) => {
  let tmp = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 1) tmp.push(a[i]);
  }
  return tmp;
};

export const greaterThan = (a, n) => {
  let tmp = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > n) tmp.push(a[i]);
  }
  return tmp;
};

export const factorial = (n) => {
  let x = 1;
  for (let i = 1; i <= n; i++) {
    x *= i;
  }
  return x;
};

export const separateEvenOdd = (a) => {
  tmp = { even: [], odd: [] };
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) tmp.even.push(a[i]);
    else tmp.odd.push(a[i]);
  }
  return tmp;
};

export const sortAsc = (a) => {
  let s = a.length;
  for (let n = s - 1; n > 0; n--) {
    let swapped = false;
    for (let i = 0; i < n; i++) {
      if (a[i] > a[i + 1]) {
        let tmp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = tmp;
        swapped = true;
      }
      if (swapped == false) return a;
    }
  }
  return a;
};

export const sumEvenIndex = (a) => {
  let total = 0;
  for (let i = 0; i < a.length; i += 2) {
    total += a[i];
  }
  return total;
};

export const multiplyByTwo = (a) => {
  for (let i = 0; i < a.length; i++) {
    a[i] *= 2;
  }
  return a;
};

export const arrayToString = (a) => {
  return a.join("");
};

export {
  productInfo,
  greet,
  sumUpTo,
  square,
  isEven,
  firstElement,
  sum,
  showUserInfo,
  nameList,
};
