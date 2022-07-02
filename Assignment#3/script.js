// #1 -- Reversal
const reversal = (s) => {
  if (isNaN(s)) {
    return "Not a number";
  } else {
    return s.toString().split("").reverse().join("");
  }
};

// #2 -- Palindrome
const palindrome = (s) => {
  let reversed = s
    .toString()
    .split("")
    .reverse()
    .filter((e) => e !== " ")
    .join("");

  return [...s].filter((e) => e !== " ").join("") === reversed;
};

// #3 -- Generate a Combination of a string
const genCom = (s) => {
  let com = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      com.push(s.slice(i, j));
    }
  }
  return com;
};

// #4 -- Return in Order
const returnInOrder = (s) => {
  return s.toString().split("").sort().join("");
};

// #5 -- Cap the first letter of each word
const capFirst = (s) => {
  let eachWord = s.split(" ");
  let empty = [];
  for (let i = 0; i < eachWord.length; i++) {
    let newWord = eachWord[i][0].toUpperCase();
    for (let j = 1; j < eachWord[i].length; j++) {
      newWord += eachWord[i][j];
    }
    empty.push(newWord);
  }
  return empty.join(" ");
};

// #6 -- Longest Word in the string of sentence
const longestWord = (s) => {
  let longest = "";
  for (let i of s.split(" ")) {
    if (i.length > longest.length) {
      longest = i;
    }
  }
  return longest;
};

// #7 -- String Vowel Counter
const vowelCounter = (s) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < [...s].length; i++) {
    if (vowels.includes([...s][i])) {
      count++;
    }
  }
  return count;
};

// #8 -- Prime Number
const primeNum = (num) => {
  if (num === 1 || isNaN(num)) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (i % num === 0) {
        return false;
      }
    }
    return true;
  }
};

// #9 -- Type of
const returnType = (s) => {
  return typeof s;
};

// #10 -- Matrix Identity
const maxtrixIdentity = (s) => {
  let arr = [];
  let count = 0;
  for (let i = 0; i < s; i++) {
    for (let j = 0; j < s; j++) {
      if (i === j) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    count++;
    console.log("-----");
  }
  return arr;
};

// #11 -- Find a Second Lowest and Second Greatest
const twoUnique = (arr) => {
  let sortArr = arr.sort((a, b) => a - b);

  let midPoint = Math.floor(sortArr.length / 2);
  let lowest = sortArr[1];
  let highest = sortArr[sortArr.length - 2];

  return console.log(lowest, highest);
};

// #12 -- Perfect Number
const perfectNum = (num) => {
  let temp = 0;
  for (let i = 0; i <= num / 2; i++) {
    console.log(num, i, num / 2);
    if (num % 2 === 0) {
      temp += i;
    }
  }
  return temp === num && temp != 0 ? true : false;
};

// #13 -- Factors of positive integer
const factorials = (num) => {
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
};

// #14 -- Convert amount
const amountToCoins = (amount, coins) => {
  let result = [];

  for (let i = 0; i < coins.length; i++) {
    if (amount >= coins[i]) {
      while (amount >= coins[i]) {
        amount -= coins[i];
        result.push(coins[i]);
      }
    }
  }
  return result;
};

// #15 -- Display Exponents
const displayExp = (b, n) => {
  return b ** n;
};

// #16 -- Remove unique character
const removeChar = (s) => {
  let unique = "";

  for (let i = 0; i < [...s].length; i++) {
    if (!unique.includes([...s][i])) {
      unique += [...s][i];
    }
  }
  return unique;
};

// #17 -- Occurence of Char
const occurence = (s) => {
  const map = new Map();

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }

  return map.forEach((val, key) =>
    val >= 2
      ? console.log(key + " occurred " + val + " times")
      : console.log(key + " occurred " + val + " time")
  );
};

// #18 -- Binary Search of Array for desired number
const binarySearch = (arr, searchVal) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], i);
    }
  }
  let narr = arr.sort((a, b) => a - b);

  let middlePosition = Math.floor(narr.length / 2);

  if (narr[middlePosition] === searchVal) {
    return map.get(narr[middlePosition]);
  } else if (narr[middlePosition] > searchVal) {
    let left = narr.slice(0, middlePosition);
    for (let j = 0; j < left.length; j++) {
      if (left[j] === searchVal) {
        return map.get(left[j]);
      }
    }
  } else {
    let right = narr.slice(middlePosition + 1);
    for (let j = 0; j < right.length; j++) {
      if (right[j] === searchVal) {
        return map.get(right[j]);
      }
    }
  }
};

// #19 -- Returns array elements larger than a number
const largerNums = (arr, n) => {
  return arr.filter((e) => e > n);
};

// #20 -- Generate a Random Characters
const generator = (len) => {
  const randomVal =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < len; i++) {
    id += randomVal[Math.floor(Math.random() * randomVal.length)];
  }
  return id;
};

// #21 -- Subset
const subset = (arr) => {
  let sub = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sub.push([arr[i], arr[j]]);
    }
  }
  return sub;
};

// #22 -- Count letter in string
const letterCounter = (s, letter) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (letter === s[i]) {
      count++;
    }
  }

  return count;
};

// #23 -- First non-repeat
const firstNonRepeat = (str) => {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], 1);
    } else {
      map.set(str[i], map.get(str[i]) + 1);
    }
  }

  let x = map.forEach((key, value) => {
    if (key === 1) {
      console.log(value + " is the first non-repeating.");
    }
  });
};

// #24 -- Bubble sort
const bubbleSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swapping the two
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
};

// #25 -- Returns longest Country Name
const longestCountry = (arr) => {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
};

// #26 -- Longest substring of without repeating
const longestSubstringRemove = (str) => {
  let chars = str.split("").reverse();
  let longSub = "";
  for (let i = 0; i < chars.length; i++) {
    if (!longSub.includes([chars[i]])) {
      longSub += chars[i];
    }
  }
  return longSub.split("").reverse().join("");
};

// #27 -- Finding the longest palindrome in given string
const isPalin = (str) => {
  return str === str.split("").reverse().join("");
};
const longestPalin = (str) => {
  let arr = [];
  let substr = "";
  for (let i = 0; i < str.length; i++) {
    sub = str.charAt(i);
    for (let j = i + 1; j < str.length; j++) {
      sub += str.charAt(j);
      if (isPalin(sub)) arr.push(sub);
    }
  }
  return arr.sort((a, b) => b.length - a.length)[0];
};

// #28 -- Callback
const xyz = (x, y, callback) => {
  return callback(x, y);
};
const callback = (x, y) => {
  return x * y;
};

// #29 -- Get functions name
const getFunc = (func) => {
  return func.name;
};
const getFuncName = () => {
  return getFuncName.name;
};

// #Special -- Create a Reduce Prototype
Array.prototype.myReducer = function (cb, args = 0) {
  for (let i = 0; i < this.length; i++) {
    cb((args += this[i]));
  }
  return args;
};
